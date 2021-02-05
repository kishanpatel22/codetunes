const Program = {

'nodejs' :  
`let express     = require('express'),
    bodyparser  = require('body-parser'),
    app = express()
app.get('/blogs/show_user_blogs/:id',(req, res) => {
    blog.findById(req.params.id, (err,found_blog) => {
        if(err) {
            console.log('Error in opening a blog');
        } else {
            res.render('show_blog', {blog : found_blog});
        }
    });
});
let PORT = process.env.PORT || 3000;
let IP = process.env.IP || '127.0.0.1';

app.listen(PORT, IP, function() {
    console.log('The server has been started !');
});`,

'React' :
`export default function App() {
    return (
        <Router>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <Link to="/users">Users</Link>
                        </li>
                    </ul>
                </nav>
                {/* A <Switch> looks through its children <Route>s and
                    renders the first one that matches the current URL. */}
                <Switch>
                    <Route path="/about">
                        <About />
                    </Route>
                    <Route path="/users">
                        <Users />
                    </Route>
                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>
            </div>
        </Router>           
    )
}`,
}

export default Program;
