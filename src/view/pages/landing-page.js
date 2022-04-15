import SampleComponent from '../components/sample-component';

export default function() {
    return {        
        view() {
              return m('div', [
                m('h2', 'Congratulations, you made it!'),
                m('p', ' -)'),
                m(SampleComponent),
            ]); 
           
        },
    };
}