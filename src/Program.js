const Program = {
'holyC' :
`
/*qsort: sort v[left]...v[right] into increasing order*/
void qsort(int v[], int left, int right){

    int i, last;

    /*do nothing if array has less than 2 elements*/      
    if(left >= right)
      return;

    swap(v, left, (left + right) / 2); 
    last = left;

    /*partition*/
    for(i = left + 1; i <= right; i++)
      if(v[i] < v[left])
        swap(v, ++last, i);

    swap(v, left, last);  /*reset partition element*/
    qsort(v, left, last - 1);
    qsort(v, last + 1, right);
}
`,

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

'react' :
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
