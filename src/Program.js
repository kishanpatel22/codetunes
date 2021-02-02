const Program = {

'nodejs' :  ` /* nodes js server */
var express     = require('express');
var bodyparser  = require('body-parser');                                          
var app = express()
App.get('/blogs/show_user_blogs/:id', 
        user_service.authenticate_user_data,
        function(req, res) {

    blog.findById(req.params.id, function(err, found_blog) {
        if(err) {
            console.log('Error in opening a blog');
        } else {
            res.render('show_blog', {blog : found_blog});
        }
    });
});
Var PORT = process.env.PORT || 3000;
Var IP = process.env.IP || '127.0.0.1';

App.listen(PORT, IP, function() {
    console.log('The server has been started !');
});`,

'React' :`
export default function App() {
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
