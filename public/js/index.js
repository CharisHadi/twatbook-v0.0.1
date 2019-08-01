//Reference to signup elements
var $username = $("#username-form");
var $password = $("#password-form");
var $repassword = $("#repassword-form");

//twerp elements
var $twerpauthor = $("#author-form");
var $twerpform = $("#twerp-form");
var $habitat = $("#twerp-habitat");

//Api Object Methods for requests to server
var API = {
    createUser : function(signUp) {
        return $.ajax({
            headers: {
                "Content-Type": "application/json"
            },
            type: "POST",
            url: "api/users/create",
            data: JSON.stringify(signUp)
        });
    },

    createTwerp : function(twerp) {
        return $.ajax({
            headers: {
                "Content-Type": "application/json"
            },
            type: "POST",
            url: "api/twerps/create",
            data: JSON.stringify(twerp)
        });
    },

    getTwerps : function() {
        return $.ajax({
            url: "api/twerps",
            type: "GET"
        });
    }
};

//Show twerps
/* Can't get it working
var populateTwerps = function(){
    API.getTwerps().then((data)=>{
        $habitat.empty();
        data.map((twerp, index)=>{
            var $timestamp = $("<small>")
              .text("Posted:" + twerp.createdAt)
              .attr({class: "text-muted"});
            
            var $timewrapper = $("<p>")
              .attr({
                  class: "card-text title"
              }).append($timestamp);

            var $content = $("<p>")
              .text(twerp.content)
              .attr({
                  class: "card-text title"
              });

            var $cardbody = $("<div>")
              .attr({class: "card-body"})
              .append($content);
            $cardbody.append($timewrapper);

            var $author = $("<h3>")
              .text(twerp.author)
              .attr({class: "title"});

            var $cardheader = $("<div>")
              .attr({class: "card-header"})
              .append($author);

            var $cardwrapper = $("div")
              .attr({
                  class: "card text-white bg-dark mb-3",
                  id : index,
                  style: "max-width: 18rem;"
                }).append($cardheader);
            $cardwrapper.append($cardbody);

            var $row = $("<div>")
              .attr({class: "row"})
              .append($cardwrapper);

            $habitat.append($row);
        });
        for(var i=0; i < alltwerps.length; i++){
            console.log(alltwerps[i]);
        }

    });
}; */

//Make Twerps
var twerpSubmit = function(event) {
    event.preventDefault();

    var twerp = {
        author: $twerpauthor.val().trim(),
        content: $twerpform.val().trim()
    };

    if(!(twerp.author && twerp.content)) {
        alert ("You have to fill both fields to Twerp!");
        return;
    }

    API.createTwerp(twerp).then(()=>{
        console.log("Twerp Created");
        // populateTwerps();
        alert("Twerped it up, cool moves");
    });

    $twerpauthor.val("");
    $twerpform.val("");
};

//Sign up form submission
var userSignUp = function(event) {
    event.preventDefault();

    if($password.val().trim() !== $repassword.val().trim()){
        alert("Make sure your passwords match!");
        return;
    }
    var signup = {
        username : $username.val().trim(),
        pword : $password.val().trim()
    };

    API.createUser(signup).then(()=>{
        console.log("User Created");
        alert("Welcome! You're ready to throw out your twerps, click outside of the form to procede.");
    });

    $username.val("");
    $password.val("");
    $repassword.val("");
};



$("#btn-signup").on("click", userSignUp);
$("#btn-twerp").on("click", twerpSubmit);