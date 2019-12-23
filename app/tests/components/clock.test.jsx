const React=require('react')
const ReactDOM=require('react-dom')
const expect=require('expect')
const $=require('jquery')
const TestUtils=require('react-addons-test-utils')



const Clock=require('clock')

describe('Clock',()=>{
    it('should exist',()=>{
        expect(Clock).toExist()
    })
    describe('render',()=>{
        it('should render clock to output',()=>{
            var clock=TestUtils.renderIntoDocument(<Clock totalSeconds={62}/>)
            var $el= $(ReactDOM.findDOMNode(clock))
            var actualtext=$el.find('.clock-text').text()
            expect(actualtext).toBe('01:02')
         })
    })
    describe('format seons',()=>{
        it('should format seconds',()=>{
            const clock=TestUtils.renderIntoDocument(<Clock/>)
            const seconds=495
            const expected='08:15'
            const actual=clock.formatSeconds(seconds)
            expect(actual).toBe(expected)
        })
       
    })
})

