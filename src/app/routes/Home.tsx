import React from "react";
import PageContainer from "../components/containers/PageContainer";
import Logo from "../components/logo/Logo";
import SliderPage from "../components/slider/Components/SliderPage";
import Slider from "../components/slider/Slider";
import DisplayIntro from "./Components/DisplayIntro";
import StepEight from "./Components/StepEight";
import StepFive from "./Components/StepFive";
import StepFour from "./Components/StepFour";
import StepNine from "./Components/StepNine";
import StepOne from "./Components/StepOne";
import StepSeven from "./Components/StepSeven";
import StepSix from "./Components/StepSix";
import StepTen from "./Components/StepTen";
import StepThree from "./Components/StepThree";
import StepTwo from "./Components/StepTwo";

const Home:React.FC = ():JSX.Element => {

    return(
        <PageContainer>
            <DisplayIntro/>
            <Slider url="./assets/media/background.jpg">
                <SliderPage page={0}>
                    <StepOne/>
                </SliderPage>
                <SliderPage page={1}>
                    <StepTwo/>
                </SliderPage>
                <SliderPage page={2}>
                    <StepThree/>
                </SliderPage>
                <SliderPage page={3}>
                    <StepFour/>
                </SliderPage>
                <SliderPage page={4}>
                    <StepFive/>
                </SliderPage>
                <SliderPage page={5}>
                    <StepSix/>
                </SliderPage>
                <SliderPage page={6}>
                    <StepSeven/>
                </SliderPage>
                <SliderPage page={7}>
                    <StepEight/>
                </SliderPage>
                <SliderPage page={8}>
                    <StepNine/>
                </SliderPage>
                <SliderPage page={9}>
                    <StepTen/>
                </SliderPage>
            </Slider>
            <Logo/>
        </PageContainer>
    );

}

export default Home;