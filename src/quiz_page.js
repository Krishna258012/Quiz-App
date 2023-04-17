const url = window.location.search;
const urlParams = new URLSearchParams(url);
const category = urlParams.get('category');
const nam = urlParams.get('name');
if(category == "pipes" ){
    document.getElementById("category_name").innerHTML = "Pipes And Cisterns";
    localStorage.removeItem("score");
    localStorage.removeItem("unAttemped");
const question1 = [
    {
        question: "A filling pipe can fill a pot in 40 minutes and wastage pipe can empty the filled pot in 60 minutes. By mistake without closing the wastage pipe, the filling pipe opened. In how much time an empty pot can be filled?t",
                first: "52",
                second: "64",
                third: "110",
                fourth: "120",
                correct: "fourth",

        
    },
    {
        question: "A pipe can fill a tank in 20 minutes. Another pipe can empty that tank in 30 minutes. If both are opened alternatively, how long will it take to fill the tank?",
        first: "150",
        second: "115",
        third: "90",
        fourth: "100",
        correct: "second",
    },
    {
        question: "A tap can fill a pond in 24 hours, and due to a leakage in the bottom it is filled in 36 hours. If the pond is half full, then how much time will the leakage take to empty the pond?",
                first: "28 hrs",
                second: "15 hrs",
                third: "10 hrs",
                fourth: "36 hrs",
                correct: "fourth",

        
    },
    {
        question: "Two inlet pipes A and B together can fill a tank in 24 min, and it takes 6 min more when one leak is developed in the tank. Find the time taken by leak alone to empty the tank.",
                first: "2 hours",
                second: "2.5 hours",
                third: "10 hours",
                fourth: "6 hours",
                correct: "first",

        
    },
    {
        question: "Three flood gates A, B and C can fill a reservoir in 6 hours. After working at it together for 2 hours, flood gate C is closed. Flood gates A and B can fill the remaining part in 7 hours. The number of hours taken by flood gate C alone to fill the reservoir is:",
                first: "28",
                second: "15",
                third: "14",
                fourth: "16",
                correct: "third",

        
    },
    {
        question: "Pipes A and B can fill a tank with water in 30 minutes and 40 minutes, respectively, while pipe C can drain off 51 litres of water per minute. If all the three pipes are opened together, the tank is filled in 90 minutes. What is the capacity (in litres) of the tank?",
                first: "900",
                second: "854",
                third: "400",
                fourth: "1080",
                correct: "fourth",

        
    },
    {
        question: "Two pipes A and B together can fill a tank in 6 hours. If pipe A can fill 5 hours faster than pipe B, in how many hours pipe B alone can fill the tank?",
                first: "12",
                second: "10",
                third: "15",
                fourth: "18",
                correct: "third",

        
    },
    {
        question: "Pipe A can fill a tank in 6 hours. Pipe B can fill the same tank in 8 hours. Pipe A, B and C together can fill the same tank in 12 hours. Then which of the following statements is true for pipe C?",
                first: "It can fill the tank in 4 hours 40 minutes",
                second: "It can fill the tank in 4 hours 48 minutes",
                third: "It can empty the tank in 4 hours 48 minutes",
                fourth: "It can empty the tank in 4 hours 40 minutes",
                correct: "third",

        
    },
    {
        question: "A tap can fill a tank in 8 hrs. After half the tank is filled, three more similar taps are opened. What is the total time taken to fill the tank completely?",
                first: "8 hrs",
                second: "3 hrs",
                third: "6 hrs",
                fourth: "5 hrs",
                correct: "fourth",
    },
    {
        question: "Two Pipes P and Q can fill a water tank in 15 and 25 minutes respectively and a third pipe R can empty at the rate of 11 gallons per minute. If P, Q, and R are opened together to fill the tank for 30 minutes then find the capacity of the tank.",
                first: "100",
                second: "58",
                third: "150",
                fourth: "80",
                correct: "third",

        
    }
];
const questionElement1 = document.getElementById("question_box");
const nextBtn1 = document.getElementById("next_question");
const demo = document.getElementById("demo");
const totalScore = document.getElementById("total_score");
const questionNo = document.getElementById("circle");


const answers = document.querySelectorAll('.answer');


let questionCount = 0;
let score = 0;
let timeSeconds =0;
let unAttemped = 0;


const loadQuestion = () => {
    const questionList = question1[questionCount];
    
    questionElement1.innerHTML = questionList.question;


    const numberOfQuestion = questionCount +1 ;
    questionNo.innerHTML = `${numberOfQuestion}/10`;

    document.getElementById("firs").innerHTML = questionList.first;
    document.getElementById("secon").innerHTML = questionList.second;
    document.getElementById("thir").innerHTML = questionList.third;
    document.getElementById("fourt").innerHTML = questionList.fourth;

};

loadQuestion();


const getCheckAnswer = () => {
    let answer;

    answers.forEach((curAnsElem) => {
        if(curAnsElem.checked){
            answer = curAnsElem.id
        }
    });
    return answer;
};

const deSelectAll = () => {
    answers.forEach((curAnsElem) => curAnsElem.checked = false )
};


nextBtn1.addEventListener('click', () => {
    const checkedAnswer = getCheckAnswer();
    if(checkedAnswer == question1[questionCount].correct){
        score++;
        totalScore.innerHTML = score;
        localStorage.setItem("score", score);
    }else if(checkedAnswer == undefined){
        unAttemped++
        localStorage.setItem("unAttemped", unAttemped);
    }
    questionCount++;

    deSelectAll();
    const number = questionCount +1 ;
    if(questionCount < question1.length){
        loadQuestion();
    }else{
        window.location.href= "./result.html?name="+nam+"&category="+category+"";
        nextBtn1.value = "submit";
    }
});


function increment(){
    timeSeconds += 1;
    document.getElementById("total_time").innerHTML = timeSeconds;
    showSelected1();
}
function showSelected1(){
    localStorage.setItem("time", timeSeconds);
}
let cancel = setInterval(increment, 1000);











}else if(category == "probability" ){
    document.getElementById("category_name").innerHTML = "Probility";
    localStorage.removeItem("score");
    localStorage.removeItem("unAttemped");
    const question1 = [
        {
            question: "What is the probability of an impossible event?",
                    first: "1",
                    second: "0",
                    third: "Insufficient data",
                    fourth: "Not defined",
                    correct: "second",
    
            
        },
        {
            question: "Company A produces 10% defective products, Company B produces 20% defective products and C produces 5% defective products. If choosing a company is an equally likely event, then find the probability that the product chosen is defective.",
            first: "0.11",
            second: "0.12",
            third: "0.15",
            fourth: "0.20",
            correct: "second",
        },
        {
            question: "The probability that at least one of the events Q and R occur is 0.6. If Q and R have probability of occurring together as 0.2, then P(Q) + P(R) is?",
                    first: "0.8",
                    second: "0.9",
                    third: "0.5",
                    fourth: "1.2",
                    correct: "fourth",
    
            
        },
        {
            question: "Let there be two newly launched phones A and B. The probability that phone A has good battery life is 0.7 and the probability that phone B has a good battery life is 0.8. Then find the probability that a phone has good battery life.",
                    first: "0.75",
                    second: "0.92",
                    third: "0.55",
                    fourth: "1.2",
                    correct: "first",
    
            
        },
        {
            question: "In a discrete probability distribution, the sum of all probabilities is always?",
                    first: "1",
                    second: "0",
                    third: "undefined",
                    fourth: "inifinite",
                    correct: "first",
    
            
        },
        {
            question: "What is the probability of an impossible event?",
                    first: "1",
                    second: "0",
                    third: "Insufficient data",
                    fourth: "Not defined",
                    correct: "second",
    
            
        },
        {
            question: "Company A produces 10% defective products, Company B produces 20% defective products and C produces 5% defective products. If choosing a company is an equally likely event, then find the probability that the product chosen is defective.",
            first: "0.11",
            second: "0.12",
            third: "0.15",
            fourth: "0.20",
            correct: "second",
        },
        {
            question: "The probability that at least one of the events Q and R occur is 0.6. If Q and R have probability of occurring together as 0.2, then P(Q) + P(R) is?",
                    first: "0.8",
                    second: "0.9",
                    third: "0.5",
                    fourth: "1.2",
                    correct: "fourth",
    
            
        },
        {
            question: "Let there be two newly launched phones A and B. The probability that phone A has good battery life is 0.7 and the probability that phone B has a good battery life is 0.8. Then find the probability that a phone has good battery life.",
                    first: "0.75",
                    second: "0.92",
                    third: "0.55",
                    fourth: "1.2",
                    correct: "first",
    
            
        },
        {
            question: "In a discrete probability distribution, the sum of all probabilities is always?",
                    first: "1",
                    second: "0",
                    third: "undefined",
                    fourth: "inifinite",
                    correct: "first",
    
            
        }
    ];
    const questionElement1 = document.getElementById("question_box");
const nextBtn1 = document.getElementById("next_question");
const demo = document.getElementById("demo");
const totalScore = document.getElementById("total_score");
const questionNo = document.getElementById("circle");


const answers = document.querySelectorAll('.answer');


let questionCount = 0;
let score = 0;
let timeSeconds =0;
let unAttemped = 0;


const loadQuestion = () => {
    const questionList = question1[questionCount];
    
    questionElement1.innerHTML = questionList.question;


    const numberOfQuestion = questionCount +1 ;
    questionNo.innerHTML = `${numberOfQuestion}/10`;

    document.getElementById("firs").innerHTML = questionList.first;
    document.getElementById("secon").innerHTML = questionList.second;
    document.getElementById("thir").innerHTML = questionList.third;
    document.getElementById("fourt").innerHTML = questionList.fourth;

};

loadQuestion();


const getCheckAnswer = () => {
    let answer;

    answers.forEach((curAnsElem) => {
        if(curAnsElem.checked){
            answer = curAnsElem.id
        }
    });
    return answer;
};

const deSelectAll = () => {
    answers.forEach((curAnsElem) => curAnsElem.checked = false )
};


nextBtn1.addEventListener('click', () => {
    const checkedAnswer = getCheckAnswer();
    if(checkedAnswer == question1[questionCount].correct){
        score++;
        totalScore.innerHTML = score;
        localStorage.setItem("score", score);
    }else if(checkedAnswer == undefined){
        unAttemped++
        localStorage.setItem("unAttemped", unAttemped);
    }
    questionCount++;

    deSelectAll();
    const number = questionCount +1 ;
    if(questionCount < question1.length){
        loadQuestion();
    }else{
        window.location.href= "./result.html?name="+nam+"&category="+category+"";
        nextBtn1.value = "submit";
    }
});


function increment(){
    timeSeconds += 1;
    document.getElementById("total_time").innerHTML = timeSeconds;
    showSelected1();
}
function showSelected1(){
    localStorage.setItem("time", timeSeconds);
}
let cancel = setInterval(increment, 1000);















} else if(category == "problems" ){
    document.getElementById("category_name").innerHTML = "Problems On Ages";
    localStorage.removeItem("score");
    localStorage.removeItem("unAttemped");
    const question1 = [
        {
            question: "The average age of five officers in a department is 32 years. If the age of their supervisor is added the average increases by 1. What is the supervisors age?",
                    first: "32 years",
                    second: "38 years",
                    third: "40 years",
                    fourth: "45 years",
                    correct: "second",
    
            
        },
        {
            question: "The resent ages of A, B and C are in the ratio of 8:14:22 respectively. The resent ages of B, C and D are in the ratio of 21:33:44 respectively. Which of the following represents the ratio of the present ages of A, B, C and D respectively.",
            first: "12:21:33:44",
            second: "12:21:31:44",
            third: "12:21:38:44",
            fourth: "Cannot be determined",
            correct: "first",
        },
        {
            question: "Six years back Seema was half of that of Rupa in age. Four years hence the respective ratio of their ages would be 3:5. How old is Rupa at present?",
                    first: "32 years",
                    second: "38 years",
                    third: "40 years",
                    fourth: "None of these",
                    correct: "fourth",
    
            
        },
        {
            question: "If 3:4 is the present age ratio of anil and varun but 5 year later , the ratio of their age change and become 4:5 . Find out the present age of varun ?",
                    first: "20 years",
                    second: "18 years",
                    third: "25 years",
                    fourth: "None of these",
                    correct: "first",
    
            
        }, {
            question: " What should be the present age of two person if 5:7 is the present age ratio of two person and 3:5 was the age ratio before the period of 16 year?",
                    first: "35 , 44 years",
                    second: "30 , 52 years",
                    third: "40 , 56 years",
                    fourth: "None of these",
                    correct: "third",
    
            
        },
        {
            question: "The average age of five officers in a department is 32 years. If the age of their supervisor is added the average increases by 1. What is the supervisors age?",
                    first: "32 years",
                    second: "38 years",
                    third: "40 years",
                    fourth: "45 years",
                    correct: "second",
    
            
        },
        {
            question: "The resent ages of A, B and C are in the ratio of 8:14:22 respectively. The resent ages of B, C and D are in the ratio of 21:33:44 respectively. Which of the following represents the ratio of the present ages of A, B, C and D respectively.",
            first: "12:21:33:44",
            second: "12:21:31:44",
            third: "12:21:38:44",
            fourth: "Cannot be determined",
            correct: "first",
        },
        {
            question: "Six years back Seema was half of that of Rupa in age. Four years hence the respective ratio of their ages would be 3:5. How old is Rupa at present?",
                    first: "32 years",
                    second: "38 years",
                    third: "40 years",
                    fourth: "None of these",
                    correct: "fourth",
    
            
        },
        {
            question: "If 3:4 is the present age ratio of anil and varun but 5 year later , the ratio of their age change and become 4:5 . Find out the present age of varun ?",
                    first: "20 years",
                    second: "18 years",
                    third: "25 years",
                    fourth: "None of these",
                    correct: "first",
    
            
        }, {
            question: " What should be the present age of two person if 5:7 is the present age ratio of two person and 3:5 was the age ratio before the period of 16 year?",
                    first: "35 , 44 years",
                    second: "30 , 52 years",
                    third: "40 , 56 years",
                    fourth: "None of these",
                    correct: "third",
    
            
        }
    ];
    const questionElement1 = document.getElementById("question_box");
const nextBtn1 = document.getElementById("next_question");
const demo = document.getElementById("demo");
const totalScore = document.getElementById("total_score");
const questionNo = document.getElementById("circle");


const answers = document.querySelectorAll('.answer');


let questionCount = 0;
let score = 0;
let timeSeconds =0;
let unAttemped = 0;


const loadQuestion = () => {
    const questionList = question1[questionCount];
    
    questionElement1.innerHTML = questionList.question;


    const numberOfQuestion = questionCount +1 ;
    questionNo.innerHTML = `${numberOfQuestion}/10`;

    document.getElementById("firs").innerHTML = questionList.first;
    document.getElementById("secon").innerHTML = questionList.second;
    document.getElementById("thir").innerHTML = questionList.third;
    document.getElementById("fourt").innerHTML = questionList.fourth;

};

loadQuestion();


const getCheckAnswer = () => {
    let answer;

    answers.forEach((curAnsElem) => {
        if(curAnsElem.checked){
            answer = curAnsElem.id
        }
    });
    return answer;
};

const deSelectAll = () => {
    answers.forEach((curAnsElem) => curAnsElem.checked = false )
};


nextBtn1.addEventListener('click', () => {
    const checkedAnswer = getCheckAnswer();
    if(checkedAnswer == question1[questionCount].correct){
        score++;
        totalScore.innerHTML = score;
        localStorage.setItem("score", score);
    }else if(checkedAnswer == undefined){
        unAttemped++
        localStorage.setItem("unAttemped", unAttemped);
    }
    questionCount++;

    deSelectAll();
    const number = questionCount +1 ;
    if(questionCount < question1.length){
        loadQuestion();
    }else{
        window.location.href= "./result.html?name="+nam+"&category="+category+"";
        nextBtn1.value = "submit";
    }
});


function increment(){
    timeSeconds += 1;
    document.getElementById("total_time").innerHTML = timeSeconds;
    showSelected1();
}
function showSelected1(){
    localStorage.setItem("time", timeSeconds);
}
let cancel = setInterval(increment, 1000);









    

} else if(category == "profit" ){
    document.getElementById("category_name").innerHTML = "Profit And Loss";
    localStorage.removeItem("score");
    localStorage.removeItem("unAttemped");
    const question1 = [
        {
            question: "Ajit age after 15 years will be 5 times his age 5 years back . what is the present age of ajit ?",
                    first: "10 years",
                    second: "12 years",
                    third: "5 years",
                    fourth: "15 years",
                    correct: "first",
    
            
        },
        {
            question: "A radio is sold for Rs. 990 at a benefit of 10%. What might have been the increase or misfortune percent, had it been sold for Rs. 890?",
            first: "5%",
            second: "10/9%",
            third: "8%",
            fourth: "none of these",
            correct: "second",
        },
        {
            question: "By offering 100 penciled, a businessperson picks up the offering cost of 20 Pencils. His addition percent is:",
                    first: "50%",
                    second: "20%",
                    third: "35%",
                    fourth: "25%",
                    correct: "fourth",
    
            
        },
        {
            question: "A man offers an article at 12.5% misfortune. Had he sold it for Rs. 103.60 more, he could have picked up 6%. What is the C.P of the articles?",
                    first: "278.60",
                    second: "432",
                    third: "560",
                    fourth: "none of these",
                    correct: "third",
    
            
        },
        {
            question: "if the wage of A is 10% more than that of B and the wage of B is 20 % not as much as that of C, than the pay of A,B, C are in the proportion.",
            first: "10:9:7",
            second: "22:20:25",
            third: "22:18:25",
            fourth: "none of these",
            correct: "second",
        },
        {
            question: "Ajit age after 15 years will be 5 times his age 5 years back . what is the present age of ajit ?",
                    first: "10 years",
                    second: "12 years",
                    third: "5 years",
                    fourth: "15 years",
                    correct: "first",
    
            
        },
        {
            question: "A radio is sold for Rs. 990 at a benefit of 10%. What might have been the increase or misfortune percent, had it been sold for Rs. 890?",
            first: "5%",
            second: "10/9%",
            third: "8%",
            fourth: "none of these",
            correct: "second",
        },
        {
            question: "By offering 100 penciled, a businessperson picks up the offering cost of 20 Pencils. His addition percent is:",
                    first: "50%",
                    second: "20%",
                    third: "35%",
                    fourth: "25%",
                    correct: "fourth",
    
            
        },
        {
            question: "A man offers an article at 12.5% misfortune. Had he sold it for Rs. 103.60 more, he could have picked up 6%. What is the C.P of the articles?",
                    first: "278.60",
                    second: "432",
                    third: "560",
                    fourth: "none of these",
                    correct: "third",
    
            
        },
        {
            question: "if the wage of A is 10% more than that of B and the wage of B is 20 % not as much as that of C, than the pay of A,B, C are in the proportion.",
            first: "10:9:7",
            second: "22:20:25",
            third: "22:18:25",
            fourth: "none of these",
            correct: "second",
        }
    ];
    const questionElement1 = document.getElementById("question_box");
const nextBtn1 = document.getElementById("next_question");
const demo = document.getElementById("demo");
const totalScore = document.getElementById("total_score");
const questionNo = document.getElementById("circle");


const answers = document.querySelectorAll('.answer');


let questionCount = 0;
let score = 0;
let timeSeconds =0;
let unAttemped = 0;


const loadQuestion = () => {
    const questionList = question1[questionCount];
    
    questionElement1.innerHTML = questionList.question;


    const numberOfQuestion = questionCount +1 ;
    questionNo.innerHTML = `${numberOfQuestion}/10`;

    document.getElementById("firs").innerHTML = questionList.first;
    document.getElementById("secon").innerHTML = questionList.second;
    document.getElementById("thir").innerHTML = questionList.third;
    document.getElementById("fourt").innerHTML = questionList.fourth;

};

loadQuestion();


const getCheckAnswer = () => {
    let answer;

    answers.forEach((curAnsElem) => {
        if(curAnsElem.checked){
            answer = curAnsElem.id
        }
    });
    return answer;
};

const deSelectAll = () => {
    answers.forEach((curAnsElem) => curAnsElem.checked = false )
};


nextBtn1.addEventListener('click', () => {
    const checkedAnswer = getCheckAnswer();
    if(checkedAnswer == question1[questionCount].correct){
        score++;
        totalScore.innerHTML = score;
        localStorage.setItem("score", score);
    }else if(checkedAnswer == undefined){
        unAttemped++
        localStorage.setItem("unAttemped", unAttemped);
    }
    questionCount++;

    deSelectAll();
    const number = questionCount +1 ;
    if(questionCount < question1.length){
        loadQuestion();
    }else{
        window.location.href= "./result.html?name="+nam+"&category="+category+"";
        nextBtn1.value = "submit";
    }
});


function increment(){
    timeSeconds += 1;
    document.getElementById("total_time").innerHTML = timeSeconds;
    showSelected1();
}
function showSelected1(){
    localStorage.setItem("time", timeSeconds);
}
let cancel = setInterval(increment, 1000);
};