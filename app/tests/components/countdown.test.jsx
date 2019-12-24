const expect=require('expect')
const React=require('react')
const ReactDOM=require('react-dom')
const TestUtils=require('react-addons-test-utils')
const $=require('jquery')

const Countdown=require('countdown')

describe('countdown componenet',()=>{
    it('should exist',()=>{
        expect(Countdown).toExist()
    })
    describe('handleSetCountdown',()=>{
        it('should set state to started and countdown',(done)=>{
            const countdown=TestUtils.renderIntoDocument(<Countdown/>)
            countdown.handleSetCountdown(10)

            expect(countdown.state.count).toBe(10)
            expect(countdown.state.countdownStatus).toBe('started')
            setTimeout(()=>{
                expect(countdown.state.count).toBe(9)
                done()
            },1001)
        })
        it('should never set count less than 0',(done)=>{
            const countdown=TestUtils.renderIntoDocument(<Countdown/>)
            countdown.handleSetCountdown(1)

            setTimeout(()=>{
                expect(countdown.state.count).toBe(0)
                done()
            },3001)
        })
    })
})