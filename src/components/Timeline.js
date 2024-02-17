import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

function Timeline(props) {
    return (
        <VerticalTimeline
            layout="1-column-left">
            {props.children.map((element) => (
                <VerticalTimelineElement
                    contentArrowStyle={{ borderRight: "transparent" }}
                    iconStyle={{ background: "rgb(252, 162, 134)" }}
                    contentStyle={{ background: "transparent", border: "none", boxShadow: "none"}}
                >   
                    {element}
                </VerticalTimelineElement>
            ))}  
        </VerticalTimeline>
    );
}

export default Timeline;