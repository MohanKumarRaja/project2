var namee = document.querySelector('#nnn')
console.log(namee)
nam = prompt("Enter Your name");
namee.innerHTML=nam

var namee = document.querySelector('#mmm')
console.log(namee)
nam = prompt("Location");
namee.innerHTML=nam

var namee = document.querySelector('#bbb')
console.log(namee)
nam = prompt("Paragraph");
namee.innerHTML=nam

var namee = document.querySelector('.l')
console.log(namee)
nam = prompt("change the portfolio");
namee.innerHTML=nam


var namee = document.querySelector('.btn btn-blue')
console.log(namee)
nam = prompt("change");
namee.innerHTML=nam


function changeImage() {
    var imageContainer = document.querySelector('.image-container');
    imageContainer.style.backgroundImage = "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKBuu71Y6o2Hf8LMTnU1UdQ7rq9-25cqendhTT8C98ow&s')";
  }
  document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('sendMessageButton').addEventListener('click', function () {
        var name = document.getElementById('nameInput').value;
        var email = document.getElementById('emailInput').value;
        var number = document.getElementById('numberInput').value;
        var message = document.getElementById('messageInput').value;

        var data = `Name: ${name}\nEmail: ${email}\nNumber: ${number}\nMessage: ${message}`;
        alert(data);
    });

    document.getElementById('sendMessage').addEventListener('click', function () {
        alert('Your Message is Successfully Submitted');
    });
});


    
      
      function addCircle() {
        var circle = document.createElement("div");
        circle.className = "circle";
        document.getElementById("shape-container").appendChild(circle);
      }
      
      function addSquare() {
        var square = document.createElement("div");
        square.className = "square";
        document.getElementById("shape-container").appendChild(square);
      }
      
      function addTriangle() {
        var triangle = document.createElement("div");
        triangle.className = "triangle";
        document.getElementById("shape-container").appendChild(triangle);
      }
      document.addEventListener('DOMContentLoaded', function () {
        var changeTextButton = document.getElementById('changeTextButton');
        var additionalText = document.getElementById('additionalText');
    
        // Function to toggle the visibility of additional text
        changeTextButton.addEventListener('click', function () {
            if (additionalText.style.display === 'none') {
                additionalText.style.display = 'block';
            } else {
                additionalText.style.display = 'none';
            }
        });
    });