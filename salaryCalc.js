$(document).ready(function(){
    $('#submitButton').click(function(event){
        event.preventDefault()
        let firstName = $('#firstName').val()
        let lastName = $('#lastName').val()
        let id = $('#id').val()
        let title = $('#title').val()
        let annualSalary = $('#annualSalary').val()
        let results = "<tr><td>" + firstName + "</td><td>" 
        + lastName + "</td><td>" + id + "</td><td>"
        + title + "</td><td class='aSalary'>" + annualSalary + "</td><td>" 
        + "<input type='submit' id='delete' value='delete'></td></tr>"
        $("table tbody").append(results); 

        let annSal = $('.aSalary');
        let totalAnnSal = 0;
        for(let i = 0; i < annSal.length; i++) {
            totalAnnSal = totalAnnSal + parseInt(annSal[i].innerText);   
        }
        
        let monthlyExpenses = totalAnnSal / 12;
        console.log(monthlyExpenses);
        $('#monthlyExpenses').text(`Monthly Expenses: $${monthlyExpenses}`)
    }) 
    $('input[type="button"]').click(function(e){   $(this).closest('tr').remove()})
    //$('#delete').on('click', deleteRow())
    // when user clicks delete, take input and delete row
    // $('#delete').click(function() {
    //     $('.annSal').remove();
    // })
    // $('input[type="submit"]').click(function(){  
    //     $(this).closest('tr').remove()
    // })
});