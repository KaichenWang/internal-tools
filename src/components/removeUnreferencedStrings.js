import React from 'react';
import {
    Layout,
    Page,
    Card,
    Button,
    TextField,
    TextContainer,
    Banner,
    FormLayout,
    List
} from '@shopify/polaris';

import constants from '../constants'
import { flattenObject, unflattenObject } from '../utilities'

const utils = constants.utilities;

class RemoveUnreferencedStrings extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            schema: '',
            lang: '',
            isVerified: false,
            keys: [],
            newLang: ''
        }
    }

    onChangeHandlerSchema = (schema) => {
        this.setState({
            schema
        })
    }

    onChangeHandlerLang = (lang) => {
        this.setState({
            lang
        })
    }

    onClickHandlerVerify = () => {
        this.setState({
            isVerified: false
        });
        const flat = flattenObject(JSON.parse(this.state.lang));
        const notFound = [];
        Object.keys(flat).forEach(key => {
            if (this.state.schema.indexOf(key) === -1) {
                delete flat[key];
                notFound.push(key);
            }
        });
        this.setState({
            keys: notFound,
            isVerified: true,
            newLang: JSON.stringify(unflattenObject(flat), undefined, 2)
        });
    }

    render() {
        return (
            <Page title={utils[1].title} breadcrumbs={[{ content: 'Utilities', url: '/' }]}>
                <Layout>
                    <Layout.Section>
                        <TextContainer>
                            <p>This utility verifies if any strings from en.json are unreferenced in schema.json</p>
                        </TextContainer>
                    </Layout.Section>
                    <Layout.Section>
                        <Card primaryFooterAction={{ content: 'Verify', onAction: this.onClickHandlerVerify.bind(this) }}>
                            <Card.Section>
                                <FormLayout>
                                    <label>schema.json</label>
                                    <textarea onChange={(e) => this.onChangeHandlerSchema(e.target.value)} style={{ width: "100%", height: "180px", resize: "none" }} ></textarea>

                                    <label>en.json</label>
                                    <textarea onChange={(e) => this.onChangeHandlerLang(e.target.value)} style={{ width: "100%", height: "180px", resize: "none" }} ></textarea>
                                </FormLayout>
                            </Card.Section>
                        </Card>
                    </Layout.Section>
                    {this.state.isVerified &&
                        <Layout.Section>
                            {this.state.keys.length === 0 &&
                                <Banner
                                    title="All keys in en.json are used in schema"
                                    status="info"
                                />
                            }
                            {this.state.keys.length > 0 &&
                                <Banner
                                    title="Following keys from en.json are not used in schema and have been removed:"
                                    status="warning"
                                >

                                    <List type="bullet">
                                        {this.state.keys.map(key => {
                                            return (<List.Item key={key}>{key}</List.Item>)
                                        })}
                                    </List>

                                </Banner>
                            }
                            {this.state.keys.length > 0 &&
                                <Card>
                                    <Card.Section>
                                        <FormLayout>
                                            <label>Updated en.json</label>
                                            <textarea value={this.state.newLang} readOnly style={{ width: "100%", height: "180px", resize: "none" }} ></textarea>
                                        </FormLayout>
                                    </Card.Section>
                                </Card>
                            }
                        </Layout.Section>
                    }
                </Layout>
            </Page>
        );
    }
}

export default RemoveUnreferencedStrings;