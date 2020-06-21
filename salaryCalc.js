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
        + title + "</td><td>" + annualSalary + "</td><td>" 
        + "<input type='submit' id='delete' value='delete'></td></tr>"
        $("table tbody").append(results); 

        for(let i = 0; i < $("table").length; i++) {
            let totalEmployeeSalary = $('#annualSalary').val()[i]; 
            totalEmployeeSalary = totalEmployeeSalary + $('#annualSalary').val()[i];
            let monthlyExpenses = parseInt(totalEmployeeSalary)/12 ;
            console.log(monthlyExpenses);

        }
    }) 
});