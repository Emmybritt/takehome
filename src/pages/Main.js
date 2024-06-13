import { Box, Container, Typography } from "@mui/material";
import CustomAppBar from "../components/CustomAppBar";
import Slider from "../components/Slider";
import { StepFooter } from "../components/StepFooter";
import { useSteps } from "../hooks/useSteps";
// import useWindowSize from 'react-use/lib/useWindowSize'
import Confetti from 'react-confetti'

export default function Main() {
	// const { width, height } = useWindowSize()
	const {
		activeStep,
		handleBack,
		handleNext,
		handleChange,
		maxStep,
		handleSubmit,
		direction,
		current,
		user,
		containerRef,
		summary,
		isLoading
	} = useSteps();

	return (
		<>
			<Container
				maxWidth="sm"
				sx={{
					boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
					display: "flex",
					flexDirection: "column",
					justifyContent: "space-between",
					height: "818px",
					borderRadius: "10px",
					position: "relative"
				}}
			>
				<CustomAppBar activeStep={activeStep} handleBack={handleBack} maxStep={maxStep} />
				{summary ? (
					<>
						<Confetti
							width={600}
							numberOfPieces={100}
						/>
						<Box position="absolute" top={250} px={3}>
							<Typography variant="h5" mb={3}>Summary</Typography>
							<Typography textAlign="center">{summary}</Typography>
						</Box></>
				) : (
					<Box
						ref={containerRef}
						sx={{
							overflow: "hidden",
							height: "50vh",
							justifyContent: "space-between",
							display: "flex",
							flexDirection: "column"
						}}
						pb={10}
					>
						<Slider
							current={current}
							direction={direction}
							handleChange={handleChange}
							handleNext={handleNext}
							user={user}
						/>
						<StepFooter
							isLoading={isLoading}
							activeStep={activeStep}
							current={current}
							handleNext={handleNext}
							handleSubmit={handleSubmit}
							maxStep={maxStep}
							user={user}
						/>
					</Box>
				)}

			</Container>
		</>

	);
}
