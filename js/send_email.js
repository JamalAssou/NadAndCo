function sendMail(){
    console.log("l'envoi a été cliqué");
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var subject = document.getElementById('subject').value;
    var message = document.getElementById('message').value;

    var body = "<div style='font-family: Arial, sans-serif;'>" +
        "<table style='width: 100%; border-collapse: collapse;'>" +
        "<tr style='background-color: #f2f2f2;'>" +
        "<th style='padding: 10px; border: 1px solid #ddd; text-align: left;'>Champ</th>" +
        "<th style='padding: 10px; border: 1px solid #ddd; text-align: left;'>Valeur</th>" +
        "</tr>" +
        "<tr>" +
        "<td style='padding: 10px; border: 1px solid #ddd; text-align: left;'><strong>Nom</strong></td>" +
        "<td style='padding: 10px; border: 1px solid #ddd; text-align: left;'>" + name + "</td>" +
        "</tr>" +
        "<tr>" +
        "<td style='padding: 10px; border: 1px solid #ddd; text-align: left;'><strong>Email</strong></td>" +
        "<td style='padding: 10px; border: 1px solid #ddd; text-align: left;'>" + email + "</td>" +
        "</tr>" +
        "<tr>" +
        "<td style='padding: 10px; border: 1px solid #ddd; text-align: left;'><strong>Sujet</strong></td>" +
        "<td style='padding: 10px; border: 1px solid #ddd; text-align: left;'>" + subject + "</td>" +
        "</tr>" +
        "<tr>" +
        "<td style='padding: 10px; border: 1px solid #ddd; text-align: left;'><strong>Message</strong></td>" +
        "<td style='padding: 10px; border: 1px solid #ddd; text-align: left;'>" + message + "</td>" +
        "</tr>" +
        "</table>" +
        "</div>";

        Email.send({
            SecureToken: "538bd5c4-15a5-4c94-bc83-7d7fd049ee26",
            To : email,
            From : "devilmanpro.08@gmail.com",
            Subject : "Nouvelle demande - Watt&Water",
            Body : body,
            ContentType : "text/html; charset=utf-8"
        }).then(
            message => alert(message)
        );
    /*Email.send({
        Host : "smtp.elasticemail.com",
        Username : "jamalassoubgs@gmail.com",
        Password : "Balid2016",
        To : 'jamalassoubgs@gmail.com',
        From : "jamalassoubgs@gmail.com",
        Subject : "This is the subject",
        Body : "And this is the body"
    }).then(
      message => alert(message)
    );*/
}
