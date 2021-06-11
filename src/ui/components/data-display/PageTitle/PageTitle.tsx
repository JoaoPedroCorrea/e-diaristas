import React from 'react';
import {PageSubtitleStyled, PageTitleContainer, PageTitleStyled} from 'ui/components/data-display/PageTitle/PageTitel.style'

interface PageTitleProps{
    title: string;
    subtitle: string;
}


const PageTitle: React.FC<PageTitleProps> = (props) => {
    return (
    <PageTitleContainer>
        <PageTitleStyled>{props.title}</PageTitleStyled>
        <PageSubtitleStyled>{props.subtitle}</PageSubtitleStyled>
    </PageTitleContainer>
    );
}

export default PageTitle;