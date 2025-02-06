var Fname, lname, profession, imageURL;

                function MyIntro() 
                {
                    Fname = prompt("Enter Your First Name : ");
                    while (!Fname) {
                        alert("Enter Your First Name ");
                        Fname = prompt("Enter Your First Name : ");
                    }

                    lname = prompt("Enter Your Last Name : ");
                    while (!lname) {
                        alert("Enter Your Last Name :");
                        lname = prompt("Enter Your Last Name : ");
                    }

                    profession = prompt("Enter Your Profession :");
                    while (!profession) {
                        alert("Enter Your Profession : ");
                        profession = prompt("Enter Your Profession :");
                    }

                    imageURL = prompt("Enter the Image URL :");
                    while (!imageURL) {
                        alert("Enter the IMage URL");
                        imageURL = prompt("Enter the Image URL :");
                    }

                    alert("Your bio information has been collected:\nFirst Name: " + Fname + "\nLast Name: " + lname + "\nProfession: " + profession);
                    console.log("User Bio Information:");
                    console.log("First Name: " + Fname);
                    console.log("Last Name: " + lname);
                    console.log("Profession: " + profession);
                    console.log("Portfolio Image: " + imageURL);

                    document.getElementById("firstName").innerText = Fname;
                    document.getElementById("lastName").innerText = lname;
                    document.getElementById("Profession").innerText = profession;
                    document.getElementById("Pimage").src = imageURL;
                }

                function UpdateBIO() {
                    MyIntro();
                }

                window.onload = MyIntro;