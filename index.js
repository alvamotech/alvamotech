const navbar = document.getElementById('navbar-container');
navbar.innerHTML = `<div class="container-fluid">
    <a class="navbar-brand" href="/">Alvamo Tech</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar-main"
        aria-controls="navbar-main" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbar-main">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
                <a href="/about" class="nav-link">About</a>
            </li>
            <li class="nav-item">
                <a href="/blog" class="nav-link">Blog</a>
            </li>
            <li class="nav-item">
                <a href="/services" class="nav-link">Services</a>
            </li>
        </ul>
    </div>
</div>`

const footer = document.getElementById('footer-container');
footer.innerHTML = `
<div class="text-center mb-3">
    <p>Copyright Finley Alva M.O. for Alvamo Tech 2024. All rights reserved.</p>
    <small>
        This content is available for free via Alvamo Tech, and can be found at
        <a href="${window.location.href}">${window.location.href}</a>.
        Reproducing it for monetary gain is strictly prohibited by the license 
        and may have legal reprocussions under the Australian Copyright Act (1968)
        or international equivalent.
    </small>
</div>
<ul class="nav justify-content-center">
    <li class="nav-item">
        <a href="/" class="nav-link">Home</a>
    </li>
    <li class="nav-item">
        <a href="/about" class="nav-link">About</a>
    </li>
    <li class="nav-item">
        <a href="/blog" class="nav-link">Blog</a>
    </li>
    <li class="nav-item">
        <a href="/services" class="nav-link">Services</a>
    </li>
</ul>
`