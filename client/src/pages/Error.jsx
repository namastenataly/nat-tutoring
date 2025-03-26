import Error from '../components/Error';
import Nav from '../components/Nav';
import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
    const error = useRouteError();
    console.error(error);

    return (
        <div>
        <Nav />
            <Error />
        </div>
    );
}
    