const expect=require('expect')
const React=require('react')
const ReactDOM=require('react-dom')
const TestUtils=require('react-addons-test-utils')
const $=require('jquery')


const CountdownForm=require('countdownform')

describe('countdownform',()=>{
    it('should exist',()=>{
        expect(CountdownForm).toExist()
    })
    it('should call onsetCountdown if valid seconds enter',()=>{
        const spy=expect.createSpy()
        const countdownform=TestUtils.renderIntoDocument(<CountdownForm onSetCountdown={spy}/>)
        const $el=$(ReactDOM.findDOMNode(countdownform))
        countdownform.refs.seconds.value='109'
        TestUtils.Simulate.submit($el.find('form')[0])
        expect(spy).toHaveBeenCalledWith(109)
    })
})