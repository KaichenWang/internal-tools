import React from 'react';
import {
    Layout,
    Page,
    Card,
    Button,
  } from '@shopify/polaris';
import banner from '../assets/banner.png'; 
import constants from '../constants'

import {
    Link
} from "react-router-dom";


const utils = constants.utilities;

function Home() {
    return (
        <Page title="Utilities">
            <Layout>
            <Layout.Section>
            <img alt="Utilities" src={banner} style={{width: "100%", marginBottom: "1em"}}></img>
            </Layout.Section>
            </Layout>
            <Layout>
                {Object.keys(utils).map(key => {
                return (
                    <Layout.Section oneThird key={key}>
                        <Card title={utils[key].title}>
                            <Card.Section>{utils[key].description}</Card.Section>
                            <Card.Section>
                            <Link to={utils[key].path}>
                                <Button>Try it</Button>
                            </Link>
                            </Card.Section>
                        </Card> 
                    </Layout.Section>
                );
                })}
            </Layout>
        </Page>
    );
}

export default Home;