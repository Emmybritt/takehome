import { useRef, useState } from "react"
import logoImg from '../logo.png';
import Groq from "groq-sdk";

const groq = new Groq({ apiKey: "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", dangerouslyAllowBrowser: true });

export const useSteps = () => {
  const [user, setUser] = useState(null)
  const [activeStep, setActiveStep] = useState(0)
  const [direction, setDirection] = useState('left');
  const [summary, setSummary] = useState(null)
  const containerRef = useRef(null);
  const [isLoading, setLoading] = useState(false)


  const steps = [
    {
      question: "Who is this visit for?",
      type: 'option',
      image: logoImg,
      name: "visitType",
      options: ["Me", "Someone else"]
    },
    {
      question: `What's ${user?.visitType === "Me" ? "your" : "His/Her"} name?`,
      name: "name",
      type: 'text',
      placeholder: 'Enter Name'
    },
    {
      question: `Great to meet you, ${user?.name}! What’s your date of birth?`,
      type: 'date',
      name: "dob",
      placeholder: 'Enter DOB'
    },
    {
      question: `Describe your issue in your own words`,
      name: "issue",
      type: 'textarea',
      placeholder: 'start typing here...'
    }
  ]
  const maxStep = steps.length
  const current = steps[activeStep];

  function handleChange(name, value) {
    setUser((prev) => ({
      ...prev,
      [name]: value
    }))
  }

  const handleNext = () => {
    setDirection("left")
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };
  const handleSubmit = async () => {
    setLoading(true)
    const summary = await groq.chat.completions.create({
      messages: [
        {
          role: "user",
          content: `help me generate a short summary about ${user.visitType} using this information, my name is ${user.name}, my date of birth is ${user.dob} and i am having this issue ${user.issue}`,
        },
      ],
      model: "llama3-8b-8192",
    });
    setSummary(summary.choices[0].message.content)
    setLoading(false)
  }

  const handleBack = () => {
    setDirection("right")
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };


  return {
    steps,
    handleChange,
    activeStep,
    maxStep,
    handleNext,
    handleBack,
    handleSubmit,
    direction,
    current,
    user,
    containerRef,
    summary,
    isLoading
  }
}