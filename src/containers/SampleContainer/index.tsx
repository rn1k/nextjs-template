import { connect } from 'react-redux';
import Sample from '~/components/pc/organisms/Sample';
import { sampleActions, sampleTypes } from '~/ducks/sample';
import { State } from '~/store';

export function mapStateToProps(state: State) {
    return {
        isLoading: state.sampleState.sample.isLoading,
    };
}

export function mapDispatchToProps(dispatch: any) {
    return {
        sendRequest: (sampleString: string) => {
            dispatch(sampleActions.requestSample(sampleString));
        },
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Sample);
