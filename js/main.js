function getName()
{
    var name = prompt("Enter Student's Name:"); 
    if(name == '')
    {
        if(confirm("KNDLY PROVIDE A NAME"))
        {
            getName();
        }
        else
        {
            alert("INPUT PROCESS CANCELED \n( KNDLY PROVIDE A NAME )")
        }
        return;

    }
    if (name != null)
    {
        document.querySelector("#stdname2").innerHTML = name;
        document.querySelector("#stdname2").style.color = "#1a01ff";
    }
    else
    {
        alert("INPUT PROCESS CANCELED \n( KNDLY PROVIDE A NAME )")
        getName();
    }
    return;

}   

function evaluateGrade()
{
    var math = parseInt(document.getElementById("grmath").value);
    var sci = parseInt(document.getElementById("grsci").value);
    var eng = parseInt(document.getElementById("greng").value);
    var fil = parseInt(document.getElementById("grfil").value);
    var pe = parseInt(document.getElementById("grpe").value);
    var ave = (math + sci + eng + fil + pe) /5;

    //MATH
    if (math <= 100 && math >= 90)
    {
        document.getElementById("mathRemark").textContent= "Excellent";
    }
    else if (math <= 89 && math >= 80)
    {
        document.getElementById("mathRemark").textContent= "Good";
    }
    else if (math <= 79 && math >= 70)
    {
        document.getElementById("mathRemark").textContent= "Average";
    }
    else if (math <= 69 && math >= 60)
    {
        document.getElementById("mathRemark").textContent= "Poor";
    }
    else
    {
        document.getElementById("mathRemark").textContent= "Fail";
    }
    
    //SCIENCE
    if (sci <= 100 && sci >= 90)
    {
        document.getElementById("sciRemark").textContent= "Excellent";
    }
    else if (sci <= 89 && sci >= 80)
    {
        document.getElementById("sciRemark").textContent= "Good";
    }
    else if (sci <= 79 && sci >= 70)
    {
        document.getElementById("sciRemark").textContent= "Average";
    }
    else if (sci <= 69 && sci >= 60)
    {
        document.getElementById("sciRemark").textContent= "Poor";
    }
    else
    {
        document.getElementById("sciRemark").textContent= "Fail";
    }

    //ENGLSIH
    if (eng <= 100 && eng >= 90)
    {
        document.getElementById("engRemark").textContent= "Excellent";
    }
    else if (eng <= 89 && eng >= 80)
    {
        document.getElementById("engRemark").textContent= "Good";
    }
    else if (eng <= 79 && eng >= 70)
    {
        document.getElementById("engRemark").textContent= "Average";
    }
    else if (eng <= 69 && eng >= 60)
    {
        document.getElementById("engRemark").textContent= "Poor";
    }
    else
    {
        document.getElementById("engRemark").textContent= "Fail";
    }

    //FILIPINO
    if (fil <= 100 && fil >= 90)
    {
        document.getElementById("filRemark").textContent= "Excellent";
    }
    else if (fil <= 89 && fil >= 80)
    {
        document.getElementById("filRemark").textContent= "Good";
    }
    else if (fil <= 79 && fil >= 70)
    {
        document.getElementById("filRemark").textContent= "Average";
    }
    else if (fil <= 69 && fil >= 60)
    {
        document.getElementById("filRemark").textContent= "Poor";
    }
    else
    {
        document.getElementById("filRemark").textContent= "Fail";
    }
    
    //P.E.
    if (pe <= 100 && pe >= 90)
    {
        document.getElementById("peRemark").textContent= "Excellent";
    }
    else if (pe <= 89 && pe >= 80)
    {
        document.getElementById("peRemark").textContent= "Good";
    }
    else if (pe <= 79 && pe >= 70)
    {
        document.getElementById("peRemark").textContent= "Average";
    }
    else if (pe <= 69 && pe >= 60)
    {
        document.getElementById("peRemark").textContent= "Poor";
    }
    else
    {
        document.getElementById("peRemark").textContent= "Fail";
    }

    //STUDENT RANK
    if (math <= 100 && math >= 90 && 
        sci <= 100 && sci >= 90 && 
        eng <= 100 && eng >= 90 && 
        fil <= 100 && fil >= 90 && 
        pe <= 100 && pe >= 90)
    {
        document.getElementById("rank").textContent="Top Honor Student";
    }
    else if 
    ((math <= 100 && math >= 90 && sci <= 100 && sci >= 90 && pe <= 100 && pe >= 90) || 
    (math <= 100 && math >= 90 && sci <= 100 && sci >= 90 && fil <= 100 && fil >= 90) || 
    (math <= 100 && math >= 90 && sci <= 100 && sci >= 90 && eng <= 100 && eng >= 90) || 
    (math <= 100 && math >= 90 && fil <= 100 && fil >= 90 && pe <= 100 && pe >= 90) || 
    (math <= 100 && math >= 90 && eng <= 100 && eng >= 90 && pe <= 100 && pe >= 90) || 
    (math <= 100 && math >= 90 && fil <= 100 && fil >= 90 && eng <= 100 && eng >= 90) || 
    (fil <= 100 && fil >= 90 && sci <= 100 && sci >= 90 && pe <= 100 && pe >= 90) || 
    (eng <= 100 && eng >= 90 && sci <= 100 && sci >= 90 && pe <= 100 && pe >= 90) || 
    (eng <= 100 && eng >= 90 && sci <= 100 && sci >= 90 && fil <= 100 && fil >= 90) || 
    (eng <= 100 && eng >= 90 && fil <= 100 && fil >= 90 && pe <= 100 && pe >= 90))
    {
        document.getElementById("rank").textContent="Second Honorable Student";
    }
    else
     {
         document.getElementById("rank").textContent="Try Again Next Time";
     }
}

function clearGrade()
{
    document.getElementById("greng").value='';
    document.getElementById("grfil").value='';
    document.getElementById("grpe").value='';
    document.getElementById("grmath").value='';
    document.getElementById("grsci").value='';
    document.getElementById("mathRemark").textContent="Evaluation";
    document.getElementById("sciRemark").textContent="Evaluation";
    document.getElementById("engRemark").textContent="Evaluation";
    document.getElementById("filRemark").textContent="Evaluation";
    document.getElementById("peRemark").textContent="Evaluation";
    document.getElementById("rank").textContent="-- Rank Here --";
    getName();
}