import React from 'react';
import {
    Layout,
    Page,
    Card,
    Button,
    Badge,
    Icon
} from '@shopify/polaris';
import { ExternalSmallMinor } from '@shopify/polaris-icons';
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
                    <img alt="Utilities" src={banner} style={{ width: "100%", marginBottom: "1em" }}></img>
                </Layout.Section>
            </Layout>
            <Layout>
                {Object.keys(utils).map(key => {
                    return (
                        <Layout.Section oneHalf key={key}>
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
                <Layout.Section oneHalf>
                    <Card>
                        <Card.Header title="Toggle all collapsibles">
                            <Badge>Chrome extension</Badge>
                        </Card.Header>
                        <Card.Section>
                            Toggles all collapsibles on a page from "themes.shopify.com" with one click
                        </Card.Section>
                        <Card.Section>
                            <a target="_blank" href="https://chrome.google.com/webstore/detail/toggle-all-collapsibles/abecpmipjeckjjnkddmjaphidooeinid">
                                <Button>
                                    <div style={{ display: "flex", alignItems: "center" }}>
                                        <span style={{ paddingRight: "0.5em" }}>Try it</span>
                                        <Icon source={ExternalSmallMinor} />
                                    </div>
                                </Button>
                            </a>
                        </Card.Section>
                    </Card>
                </Layout.Section>
                {Object.keys(utils).length % 2 + 1 !== 0 &&
                    <Layout.Section oneHalf></Layout.Section>
                }
            </Layout>
        </Page>
    );
}

export default Home;