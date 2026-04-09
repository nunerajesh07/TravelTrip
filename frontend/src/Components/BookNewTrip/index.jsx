import { useState } from 'react'
import Navbar from '../Navbar'
import YourDetails from "../YourDetails"
import Guests from '../Guests'
import TravelAssistance from '../TravelAsssistant'
import Confirmation from '../Confirmation'
import DateSelection from '../DateSelection'
import StepSidebar from '../StepSidebar'
import './index.css'

const BookNewTrip = () => {

    const [step, setStep] = useState(1)

    const [name, setName] = useState("")
    const [startLocation, setStartLocation] = useState("")
    const [endLocation, setEndLocation] = useState("")

    const [startDate, setStartDate] = useState("")
    const [endDate, setEndDate] = useState('')

    const [adults, setAdults] = useState(1)
    const [children, setChildren] = useState(0)
    const [infants, setInfants] = useState(0)

    const [assist, setAssist] = useState(false)
    const [assistType, setAssistType] = useState("")

    const guest = adults + children + infants

    const nextStep = () => {
        setStep(prev => prev + 1)
    }
    const prevStep = () => {
        setStep(prev => prev - 1)
    }


    const userDetailsComponent = () => {
        return (
            <YourDetails
                nextStep={nextStep}
                name={name}
                setName={setName}
                startLocation={startLocation}
                setStartLocation={setStartLocation}
                endLocation={endLocation}
                setEndLocation={setEndLocation}
            />
        )

    }
    const DateSelectionComponent = () => {
        return (
            <DateSelection
                nextStep={nextStep}
                prevStep={prevStep}
                startDate={startDate}
                setStartDate={setStartDate}
                endDate={endDate}
                setEndDate={setEndDate}
            />
        )
    }
    const GuestsComponent = () => {
        return (
            <Guests
                nextStep={nextStep}
                prevStep={prevStep}
                adults={adults}
                setAdults={setAdults}
                children={children}
                setChildren={setChildren}
                infants={infants}
                setInfants={setInfants}
            />
        )
    }
    const TravelAssistanceComponent = () => {
        return (
            <TravelAssistance
                nextStep={nextStep}
                prevStep={prevStep}
                assist={assist}
                setAssist={setAssist}
                assistType={assistType}
                setAssistType={setAssistType}
            />
        )
    }
    const ConfirmationComponent = () => {
        return (
            <Confirmation
                prevStep={prevStep}
                name={name}
                startLocation={startLocation}
                endLocation={endLocation}
                startDate={startDate}
                endDate={endDate}
                guests={guest}
                assistType={assistType}

            />
        )
    }



    const renderStep = () => {
        switch (step) {
            case 1:
                return userDetailsComponent()
            case 2:
                return DateSelectionComponent()
            case 3:
                return GuestsComponent()
            case 4:
                return TravelAssistanceComponent()
            case 5:
                return ConfirmationComponent()
            default:
                return null
        }
    }

    return (
        <div className="book-trip-page">
            <Navbar />
            <div className="book-trip-main-content">
                <StepSidebar step={step} />
                {renderStep()}
            </div>
        </div>
    )
}

export default BookNewTrip