<nav className="navbar navbar-expand-lg navbar-light bg-light">
<h1>GRANT BROWN</h1>
<button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent">
    <span className="navbar-toggler-icon"></span>
</button>

<div class="collapse navbar-collapse" id="navbarSupportedContent">

{/* home */}

{left_bracket_render}
<Link className="nav-anchor" 
onMouseEnter={(e) => {
    anime({targets: e.target, color: "#01B9FF", easing: "linear", duration: 1000});
}
}
onMouseLeave={(e) => {                               
anime({targets: e.target, color: "#000000", }), console.log(e.target)}}                    
to='/'>HOME</Link>
{right_bracket_render}

{/* end home */}

{/* projects */}

{left_bracket_render_two}
<Link className="nav-anchor" 
onMouseEnter={(e) => {
    anime({targets: e.target, color: "#01B9FF", easing: "linear", });
}
}
onMouseLeave={(e) => {                               
anime({targets: e.target, color: "#000000", duration: 1000}), console.log(e.target)}}                    
to='/projects'>PROJECTS</Link>
{right_bracket_render_two}

{/* end projects */}                    

{/* blogs */}

{left_bracket_render_three}
<Link className="nav-anchor" 
onMouseEnter={(e) => {
    anime({targets: e.target, color: "#01B9FF", easing: "linear", duration: 1000}); 
}
}
onMouseLeave={(e) => {                                                   
anime({targets: e.target, color: "#000000",}), console.log(e.target)}}                    
to='/blog'>BLOG</Link>
{right_bracket_render_three}

{/* end blogs */}
</div>      
</nav>