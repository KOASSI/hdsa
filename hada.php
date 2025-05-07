<?php
$servername = "localhost"; // ou l'adresse de votre serveur
$username = "votre_utilisateur"; // votre nom d'utilisateur MySQL
$password = "votre_mot_de_passe"; // votre mot de passe MySQL
$dbname = "contact_form";

// Créer une connexion
$conn = new mysqli($servername, $username, $password, $dbname);

// Vérifier la connexion
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Préparer et lier
$stmt = $conn->prepare("INSERT INTO submissions (name, email, phone, message) VALUES (?, ?, ?, ?)");
$stmt->bind_param("ssss", $name, $email, $phone, $message);

// Récupérer les valeurs du formulaire
$name = $_POST['name'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$message = $_POST['message'];

// Exécuter la requête
if ($stmt->execute()) {
    echo "Message envoyé avec succès.";
} else {
    echo "Erreur: " . $stmt->error;
}

// Fermer la connexion
$stmt->close();
$conn->close();
?>