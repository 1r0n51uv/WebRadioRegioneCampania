import React, {Component} from 'react';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

class Player extends Component {
    constructor(props) {
        super(props);
        this.state = {
            toPlay: "http://radioregionecampania.it:8000/home?type=.mp3",
            live: true
        }
    }


    switchToPlay = () => {
        this.setState({
            toPlay: "https://firebasestorage.googleapis.com/v0/b/webradioregionecampania.appspot.com/o/file_example_MP3_5MG.mp3?alt=media&token=d4847d5d-d698-4ba4-acd9-e758015a0c0c",
            live: false
        })
    }


    render() {
        return (
            <div>
                <AudioPlayer
                    autoPlay={false}
                    loop={true}
                    src={this.state.toPlay}
                    showSkipControls={false}
                    showJumpControls={false}
                    onPlay={() => console.log("onPlay")}
                    onError={() => this.switchToPlay()}
                    onEnded={() => {if (!this.state.live) {
                        this.switchToPlay()
                    }}}

                    // other props here
                />

            </div>
        );
    }
}

export default Player;
