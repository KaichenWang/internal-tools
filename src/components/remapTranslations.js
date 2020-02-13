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

class RemapTranslations extends React.Component {

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

    }

    onChangeHandlerLang = (lang) => {
  
    }

    onClickHandlerVerify = () => {
 
    }

    render() {
        return (
            <Page title={utils[2].title} breadcrumbs={[{ content: 'Utilities', url: process.env.PUBLIC_URL }]}>
                <Layout>
                    <Layout.Section>
                        <TextContainer>
                            <p>Coming Soon</p>
                        </TextContainer>
                    </Layout.Section>
                </Layout>
            </Page>
        );
    }
}

export default RemapTranslations;