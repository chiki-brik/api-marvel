import ErrorMessage from "../errorMessage/ErrorMessage";
import {Link, useNavigate} from 'react-router-dom';
import { Helmet } from 'react-helmet';

const Page404 = () => {
    const navigate = useNavigate();
    return (
        // чтобы не сломать верстку тут нужен div а не пустой фрагмент???
        <div>
            <Helmet>
                <meta
                    name="description"
                    content="Error"
                    />
                <title>Page doesn't exist</title>
            </Helmet>
            <ErrorMessage/>
            <p style={{'textAlign': 'center', 'fontWeight': 'bold', 'fontSize': '24px'}}>Page doesn't exist</p>
            <a onClick={() => navigate(-1)} style={{'display': 'block', 'textAlign': 'center', 'fontWeight': 'bold', 'fontSize': '24px', 'marginTop': '30px'}} href="#">Back</a>
            {/* <Link onClick={() => navigate(-1)} style={{'display': 'block', 'textAlign': 'center', 'fontWeight': 'bold', 'fontSize': '24px', 'marginTop': '30px'}} to="/">Back to main page</Link> */}
        </div>
    )
}

export default Page404;