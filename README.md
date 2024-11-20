<!DOCTYPE html>
<html lang="hu">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Portfólió</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            background-color: #f9f9f9;
            color: #333;
        }
        header {
            background-color: #007BFF;
            color: white;
            padding: 20px 0;
            text-align: center;
        }
        nav {
            margin: 20px 0;
        }
        nav a {
            margin: 0 15px;
            color: white;
            text-decoration: none;
            font-weight: bold;
        }
        nav a:hover {
            text-decoration: underline;
        }
        section {
            padding: 20px;
            max-width: 800px;
            margin: 0 auto;
        }
        h1, h2 {
            text-align: center;
        }
        .projects {
            display: flex;
            flex-wrap: wrap;
            gap: 20px;
            justify-content: center;
        }
        .project {
            background-color: #fff;
            padding: 15px;
            border: 1px solid #ddd;
            border-radius: 5px;
            width: 300px;
            text-align: center;
        }
        footer {
            background-color: #d279a6; /* Sötétszürke háttér */
            color: white; /* Fehér szöveg */
            text-align: center; /* Középre igazítás */
            padding: 20px 0; /* Függőleges belső térköz */
            line-height: 1.6; /* Sorok közötti távolság */
            width: 100%;
        }
        a {
            color: #007BFF;
        }
    </style>
</head>
<body>
    <header>
        <h1>Emese Gojdar</h1>
        <nav>
            <a href="#about">About me</a>
            <a href="#projects">Gallery</a>
            <a href="#contact">Contact</a>
        </nav>
    </header>
    <section id="about">
        <h2>About me</h2>
        <p>Welcome [Itt írhatsz magadról pár mondatot, például a szakmai hátteredről és érdeklődési köreidről.]</p>
    </section>
    <section id="projects">
        <h2>Projects</h2>
        <div class="projects">
            <div class="project">
                <h3>Projekt 1</h3>
                <p>Rövid leírás a projektről.</p>
                <a href="#">Részletek</a>
            </div>
            <div class="project">
                <h3>Projekt 2</h3>
                <p>Rövid leírás a projektről.</p>
                <a href="#">Részletek</a>
            </div>
            <div class="project">
                <h3>Projekt 3</h3>
                <p>Rövid leírás a projektről.</p>
                <a href="#">Részletek</a>
            </div>
        </div>
    </section>
    <section id="contact">
        <h2>Contact</h2>
        <p>Keress meg az alábbi elérhetőségek egyikén:</p>
        <ul>
            <li>Email: <a href="mailto:example@example.com">example@example.com</a></li>
            <li>Social: </li>
        </ul>
    </section>
<footer>
    &copy; Portfolio of Emese Gojdar, © Copyright 2024 Emese Gojdar. All rights reserved.<br>
    Department of Geoinformatics – Z_GIS<br>
    Schillerstraße 30<br>
    5020 Salzburg<br>
    Austria
</footer>
</body>
</html>
