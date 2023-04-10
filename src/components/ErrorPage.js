import {Link, useRouteError} from "react-router-dom";
import {Button, Result} from 'antd';

export default function ErrorPage() {
    const error = useRouteError();
    return (
        <div>
            <Result
                status={error.type}
                title={error.message}
                subTitle="Sorry, an unexpected error has occurred."
                extra={
                    <Link to="/">
                        <Button type="primary">Back Home</Button>
                    </Link>
                }
            />
        </div>

    );
}
