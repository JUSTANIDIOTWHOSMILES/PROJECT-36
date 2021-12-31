class Question {

  constructor() {
    this.title = createElement('h1')
    this.input1 = createInput("Enter Your Name Here....");
    this.input2 = createInput("Enter Correct Option No..");
    this.input3 = createInput(" Ur feedback <3")
    this.button = createButton('Submit');
    this.feedback = createButton('SUBMIT');
    this.question1 = createElement('h3');
    this.question2 = createElement('h4');
    this.option1 = createElement('h4');
    this.option2 = createElement('h4');
    this.option3 = createElement('h4');
    this.option4 = createElement('h4');
    this.message = createElement("h2")
  }

  hide(){
    this.title.hide();
    this.input1.hide();
    this.button.hide();
    this.input2.hide();
    this.message.hide();
  }

  display(){
    this.title.html("MyQuiz Game");
    this.title.position(350, 0);

     //this.question("Question:- What starts and ends with the letter ‘E’, but has only one letter? " );
    //this.html("Question:- What starts and ends with the letter ‘E’, but has only one letter? " );
    this.question1.html("Question:- What starts and ends with the letter ‘E’, but has only one letter? " );
    this.question2.html("Q :- How was this Quiz ? ")
    // question.html("Question:- What starts and ends with the letter ‘E’, but has only one letter? " );



    this.question1.position(150, 80);
    this.option1.html("1: everyone  " );
    this.option1.position(150, 100);
    this.option2.html("2:  envelope" );
    this.option2.position(150, 120);
    this.option3.html("3: Estimate " );
    this.option3.position(150, 140);
    this.option4.html("4: Example" );
    this.option4.position(150, 160);

    this.input1.position(150, 230);
    this.input2.position(350, 230);

    this.question2.position(450,430);

    this.input3.position(450,500);
    this.button.position(290, 300);
    this.feedback.position(600,500);

    this.button.mousePressed(()=>{
      
       this.message.html("Thank You, Your Answer Has Been Submitted");
       this.message.position(350, 350);

      // this.message.html("Thank You, Your Answer Has Been Submitted");
      // this.message.position();

      // this.message("Thank You, Your Answer Has Been Submitted");
      // this.message(350, 350);

      // this.message.html("Thank You, Your Answer Has Been Submitted");
      // this.message.position(350);


    });

    this.feedback.mousePressed(()=>{
      
      this.message.html("Thank You, Your Answer Has Been Submitted");
      this.message.position(450,450);});

  }
}
