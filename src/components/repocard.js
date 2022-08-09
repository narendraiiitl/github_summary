import Button from 'react-bootstrap/Button';
import React, { useEffect, useState } from 'react';
import { Card, CardBody, CardHeader, Badge, CardFooter, CardTitle, CardText } from 'reactstrap';
import { Octokit, App } from "octokit";
import Spinner from 'react-bootstrap/Spinner';
const octokit = new Octokit({})
function Repocard({ data, username }) {
    const [languages, setLanguages] = useState([]);
    useEffect(() => {
        if (data) {
            getLanguages(data);
        }
    }, [data]);
    const getLanguages = async (data) => {

        await octokit.request("GET /repos/{user}/{name}/languages", {
            user: username,
            name: data.name
        }).then(r => {
            setLanguages(r.data);
        });
    }
    const lang = () => {
        var nd = [];
        for (const p in languages) {
            nd.push(<Badge
                style={{
                    margin: "5px"
                }}
                className="text-dark"
                color="light"
                pill
            >
                {p}
            </Badge>
            );
        }
        return nd;
    };
    return (
        <Card
            className="my-2"
            style={{
                width: '18rem'
            }}
        >
            <CardHeader tag="h5">
                {data.name}
            </CardHeader>
            <CardBody>
                <CardTitle >
                    {data.description}
                </CardTitle>
                <CardText>
                    {data.language_url}
                </CardText>
                {lang()}
            </CardBody>
        </Card>
    );
}

export default Repocard;