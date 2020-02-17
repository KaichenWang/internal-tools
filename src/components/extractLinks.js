import React from 'react';
import {
    Layout,
    Page,
    Card,
    TextContainer,
    FormLayout,
    Banner,
    List,
    TextField
} from '@shopify/polaris';

import constants from '../constants'

const utils = constants.utilities;

class extractLinks extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            text: '',
            append: '',
            links: [],
            complete: false
        }
    }

    onChangeHandlerText = (text) => {
        this.setState({
            text,
            complete: false
        })
    }

    onChangeHandlerAppend = (append) => {
        this.setState({
            append,
            complete: false
        })
    }

    onClickHandlerExtract = () => {
        const urls = this.state.text.match(/(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig);

        const links = urls ? urls.map(url => {
            return `${url}${this.state.append}`
        }) : [];

        this.setState({
            links,
            complete: true
        });
    }

    render() {
        return (
            <Page title={utils[3].title} breadcrumbs={[{ content: 'Utilities', url: process.env.PUBLIC_URL }]}>
                <Layout>
                    <Layout.Section>
                        <TextContainer>
                            <p>{utils[3].description}</p>
                        </TextContainer>
                    </Layout.Section>
                    <Layout.Section>
                        <Card primaryFooterAction={{ content: 'Extract links', onAction: this.onClickHandlerExtract.bind(this) }}>
                            <Card.Section>
                                <FormLayout>
                                    <label>Text</label>
                                    <textarea
                                        value={this.state.text}
                                        onChange={(e) => this.onChangeHandlerText(e.target.value)}
                                        style={{ width: "100%", height: "180px", resize: "none" }}>
                                    </textarea>
                                    <TextField label="Append links with" value={this.state.append} onChange={(value) => this.onChangeHandlerAppend(value)} />
                                </FormLayout>
                            </Card.Section>
                        </Card>
                    </Layout.Section>
                    {this.state.complete &&
                        <Layout.Section>
                            {this.state.links.length > 0 &&
                                <Banner
                                    title="Links extracted"
                                    status="success"
                                />
                            }
                            {this.state.links.length > 0 &&
                                <Card>
                                    <Card.Section>
                                        <List type="bullet">
                                            {this.state.links.map(link => {
                                                return (
                                                    <List.Item key={link}>
                                                        <a target="_blank" href={link}>{link}</a>
                                                    </List.Item>
                                                )
                                            })}
                                        </List>
                                    </Card.Section>
                                </Card>
                            }
                            {this.state.links.length === 0 &&
                                <Banner
                                    title="No links found"
                                    status="warning"
                                />
                            }
                        </Layout.Section>
                    }
                </Layout>
            </Page >
        );
    }
}

export default extractLinks;