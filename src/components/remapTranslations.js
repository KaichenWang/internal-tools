import React from 'react';
import {
    Layout,
    Page,
    Card,
    TextContainer,
    FormLayout,
    Badge,
    Banner,
    List,
    DropZone
} from '@shopify/polaris';

import constants from '../constants'
import { flattenObject, unflattenObject, download, getKeyByValue } from '../utilities'

const utils = constants.utilities;

class RemapTranslations extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            enNew: '',
            langOld: {},
            missing: [],
            complete: false,
            error: {
                title: '',
                message: ''
            },
        }
    }

    reset = () => {
        this.setState({
            complete: false,
            error: {
                title: '',
                message: ''
            }
        })
    }

    onChangeHandlerNew = (enNew) => {
        this.reset();
        this.setState({
            enNew
        })
    }

    onChangeHandlerLang = (locale, lang) => {
        this.reset();
        const langOld = {
            ...this.state.langOld
        }
        if (lang === '') {
            delete langOld[locale];
        }
        else {
            langOld[locale] = lang;
        }
        this.setState({
            langOld
        })
    }

    onChangeHandlerUpload = (files) => {
        this.reset();
        const langOld = {};

        const readFile = (file) => {
            return new Promise((resolve, reject) => {
                var reader = new FileReader();
                reader.onload = () => {
                    const key = file.name.substr(0, file.name.lastIndexOf('.'));
                    if (constants.locales.includes(key)) {
                        langOld[key] = reader.result;
                    }
                    resolve();
                }
                reader.readAsText(file);
            })
        }

        Array.from(files).reduce(async (previousPromise, file) => {
            await previousPromise;

            return readFile(file);
        }, Promise.resolve()).then(() => {
            this.setState({
                langOld
            });
        });
    }

    onClickHandlerRemap = () => {
        this.reset();
        const state = this.state;
        const missing = [];

        if (state.enNew.length === 0) {
            this.setState({
                error: {
                    title: 'Error',
                    message: 'No updated en.json defined'
                }
            });
            return -1;
        }

        if (Object.keys(state.langOld).length === 0) {
            this.setState({
                error: {
                    title: 'Error',
                    message: 'No locale files defined'
                }
            });
            return -1;
        }


        function translate(langOld, langKey) {
            try {
                var result = flattenObject(JSON.parse(state.enNew));
                var flatNew = flattenObject(JSON.parse(state.enNew));
                var flatOld = flattenObject(JSON.parse(state.langOld['en']));
                var flatLangOld = flattenObject(JSON.parse(langOld));

                Object.keys(flatNew).forEach((key) => {
                    var val = flatNew[key];
                    var keyOld = getKeyByValue(flatOld, val);
                    if (keyOld) {
                        result[key] = flatLangOld[keyOld];
                    }
                    else {
                        delete result[key]
                        missing.push(`${langKey}.json - ${key}`)
                    }
                });

                const unflat = unflattenObject(result);
                const unflatString = JSON.stringify(unflat, undefined, 2);
                return unflatString;
            }
            catch (error) {
                return error;
            }
        }

        Object.keys(state.langOld).reduce(async (previousPromise, key) => {
            await previousPromise;
            if (key !== 'en') {
                const translation = translate(state.langOld[key], key);
                if (translation instanceof Error) {
                    this.setState({
                        error: {
                            title: 'Error',
                            message: translation.message
                        }
                    });
                    return Promise.reject();
                }
                else {
                    return download(`${key}.json`, translation);
                }
            } else {
                return Promise.resolve();
            }
        }, Promise.resolve()).then(() => {
            this.setState({
                missing,
                complete: true
            });
        });
    }

    render() {
        return (
            <Page title={utils[2].title} breadcrumbs={[{ content: 'Utilities', url: process.env.PUBLIC_URL }]}>
                <Layout>
                    <Layout.Section>
                        <TextContainer>
                            <p>{utils[2].description}</p>
                        </TextContainer>
                    </Layout.Section>
                    <Layout.Section>
                        <Card primaryFooterAction={{ content: 'Download updated locales', onAction: this.onClickHandlerRemap.bind(this) }}>
                            <Card.Section subdued>
                                <FormLayout>
                                    <Badge status="success">Updated file</Badge>
                                    <label>en.json</label>
                                    <textarea value={this.state.enNew} onChange={(e) => this.onChangeHandlerNew(e.target.value)} style={{ width: "100%", height: "100px", resize: "none" }} ></textarea>
                                </FormLayout>
                            </Card.Section>
                            <Card.Section>
                                <FormLayout>
                                    <Badge status="attention">Original files</Badge>
                                    <DropZone label="Select locale files" onDrop={e => { this.onChangeHandlerUpload(e) }}>
                                        <DropZone.FileUpload />
                                    </DropZone>

                                    {constants.locales.map(locale => {
                                        return (
                                            <React.Fragment key={locale}>
                                                <label>{locale}.json</label>
                                                <textarea value={this.state.langOld[locale]} onChange={(e) => this.onChangeHandlerLang(locale, e.target.value)} style={{ width: "100%", height: "100px", resize: "none", marginTop: "1em" }} ></textarea>
                                            </React.Fragment>
                                        )
                                    })}
                                </FormLayout>
                            </Card.Section>
                        </Card>
                    </Layout.Section>
                    <Layout.Section>
                        {this.state.complete &&
                            <Banner
                                title="Files downloaded"
                                status="success"
                            />
                        }
                        {this.state.complete && this.state.missing.length > 0 &&
                            <Banner
                                title="Following translations could not be remapped:"
                                status="warning"
                            >
                                <List type="bullet">
                                    {this.state.missing.map(key => {
                                        return (<List.Item key={key}>{key}</List.Item>)
                                    })}
                                </List>
                            </Banner>
                        }
                        {this.state.error.title.length > 0 &&
                            <Banner
                                title={this.state.error.title}
                                status="critical"
                            >
                                <p>{this.state.error.message}</p>
                            </Banner>
                        }
                    </Layout.Section>
                </Layout>
            </Page >
        );
    }
}

export default RemapTranslations;