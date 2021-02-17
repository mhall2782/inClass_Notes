albums covers

css:
/*!  GENERAL SETUP */
html, body {
    margin: 0;
    padding: 0;
}
html {
    font-size: 10px;
    background: linear-gradient(133deg, 
        rgba(235,217,181,1) 20%,
        rgba(236,105,165,1) 50%, 
        rgba(89,232,247,1) 100%);
}
body {
    width: 80vw;
    min-width: 800px;
    margin: 0 auto;
    height: 100vh;
}
/*! TYPOGRAPHY */
h1, h2 {
    font-family: 'Raleway', sans-serif;
    color: #2a2a2a;
}
p, li {
    font-family: 'Roboto Condensed', sans-serif;
    color: #2a2a2a;
}
h1 {
    font-size: 4rem;
    /* REMs are a way of setting font-size based on the font-size of the root HTML element.  They also allow you to quickly scale an entire project by changing the root font-size */
    /*
        - 1rem = 100% font size of the root element.
        - in this case: 4rem = 4x h1
    */
    text-align: center;
    text-shadow: 2px 2px 10px black;
}
h2 {
    font-size: 3rem;
    text-align: center;
}
p, li {
    font-size: 1.6rem;
    line-height: 1.5;;
}
/*! HEADER LAYOUT */
header {
    /* margin: 0 0 10px 0; */
    margin-bottom: 10px;
    /* *Show Inspector as these margins are moving */
}
main, header, nav, article, aside, footer, section {
    background-color: rgba(255,255,255,.05);
    padding: 1%;
    /*
        - set classes in our HTML
    */
}
h1 {
    text-transform: uppercase;
}
nav {
    height: 50px;
    /* *show inspector and how the box is shown vs where the text is laying out */
}
nav ul {
    display: flex;
}
    /*  
        - Commas state that we want to style "this" element AND "that" element.
        - No commas states that we want to style "this" element WITHIN "that" element (and not to style "that" as well).
    */
nav li {
    list-style-type: none;
    text-align: center;
    flex: 1;
    /* 
        flex is shorthand for:
            - flex-grow
                - specifies how much the item will grow
                - 1 unitless value (ie: the number 1 here)
            - flex-shrink
                - specifies how much the item will shrink
                - 2 unitless values (not shown)
            - flex-basis
                - specifies initial length of a flexible item
                - One value w/ unit
            - nav li will take up 100% of the container width.
    * show inspect tool and how it is repsonding between 0 and 1 on flex
    */
}
nav a, nav span {
    font-size: 2rem;
    height: 3rem;
    text-transform: uppercase;
    text-decoration: none;
    color: black;
}
/*! MAIN LAYOUT */
main {
    display: flex;
}
section, article {
    flex: 4;
    /* 
        - 4 = 80% of the container (4/4+1)
    */
}
aside {
    flex: 1;
    /* 1 = 20% of the container (1/1+4) */
    margin-left: 10px;
    padding: 1%;
}
aside a {
    float: left;
    width: 50%;
}
aside img {
    max-width: 100%;
}
footer {
    margin-top: 10px;
}

html:
<!DOCTYPE html>
<html lang="en">
<head>
    <!-- 
        Holds metadata 
        information we don't see
         - links, viewport info, document title, etc.
    -->
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://fonts.googleapis.com/css2?family=Raleway&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="styles.css"> 
    <title>Music Blog</title>
    <!-- <style>
        body {
            background-color: aqua;
            background-color: black;
        }
    </style> -->
</head>
<body>
    <header>
        <!-- 
            - header can be used for introductory content or a set of navigational links.
         -->
         <h1>Music Blog</h1>
         <nav>
             <ul>
                 <!--emmet = li*4 -->
                 <li><span>Home</span></li>
                 <li><a href="#">Get Started</a></li> 
                 <li><a href="#">Photos</a></li> 
                 <li><a href="#">Forum</a></li> 
             </ul>
         </nav>
    </header>
    <section>
        <!-- 
            The <section> tag defines a section in a doc and has a default value of a block display.  
         -->
         <h2>Welcome</h2>
         <main>
             <!-- 
                 - specifies the main content
                 - There can only be one
                 - Cannot be a descendant (child) of:
                    - header
                    - nav
                    - article
                    - aside
                    - footer
              -->
              <article>
                  <!-- The <article> tag specifies independent, self-contained content. -->
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, voluptas ipsum doloribus asperiores et commodi. Numquam quisquam quo autem quas ullam quod pariatur maiores necessitatibus, assumenda cupiditate rem exercitationem sit. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat animi repudiandae expedita recusandae neque illo adipisci blanditiis. Maiores commodi placeat earum officia sapiente? Dolorem maiores in repellendus tenetur minus iure?</p>    
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, voluptas ipsum doloribus asperiores et commodi. Numquam quisquam quo autem quas ullam quod pariatur maiores necessitatibus, assumenda cupiditate rem exercitationem sit. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat animi repudiandae expedita recusandae neque illo adipisci blanditiis. Maiores commodi placeat earum officia sapiente? Dolorem maiores in repellendus tenetur minus iure?</p>    
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, voluptas ipsum doloribus asperiores et commodi. Numquam quisquam quo autem quas ullam quod pariatur maiores necessitatibus, assumenda cupiditate rem exercitationem sit. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat animi repudiandae expedita recusandae neque illo adipisci blanditiis. Maiores commodi placeat earum officia sapiente? Dolorem maiores in repellendus tenetur minus iure?</p>   
                   <!-- Shift + Alt + [down arrow] or [up arrow] to copy quickly  -->
              </article>
              <aside>
                <!-- 
                    The <aside> tag defines some content aside from the content it is placed in or indirectly related to the surrounding content.
                 -->
                 <h2>Favorite Albums</h2>
                 <!-- a:blank*3>img -->
                 <a href="./assets/PinkFloyd.jpg" target="_blank" rel="noopener noreferrer"><img src="./assets/PinkFloyd.jpg" alt="Division Bell - Pink Floyd"></a>
                 <a href="./assets/BrokenBells_Amoeba.jpg" target="_blank" rel="noopener noreferrer"><img src="./assets/BrokenBells_Amoeba.jpg" alt="Broken Bells"></a>
                 <a href="./assets/inYourHonor.jpg" target="_blank" rel="noopener noreferrer"><img src="./assets/inYourHonor.jpg" alt="Foo Fighters - In Your Honor"></a>
                 <a href="./assets/TVotR_seeds.jpg" target="_blank" rel="noopener noreferrer"><img src="./assets/TVotR_seeds.jpg" alt="TV on the Radio - Seeds"></a>
              </aside>
         </main>
    </section>
    <footer>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt vitae aperiam amet officia velit! Fuga culpa, adipisci repudiandae sed tempore veritatis? Est sunt praesentium ipsum facere quis cupiditate adipisci consectetur? &copy;2021</p>
    </footer>
</body>
</html>

