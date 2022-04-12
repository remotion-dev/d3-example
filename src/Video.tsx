import {Composition} from 'remotion';
import {Comp} from './Composition';

export const RemotionVideo: React.FC = () => {
	return (
		<>
			<Composition
				id="D3Demo"
				component={Comp}
				durationInFrames={60}
				fps={30}
				width={1280}
				height={720}
			/>
		</>
	);
};
