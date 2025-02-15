import { Action } from 'movex-core-util';

export type CanvasState = {};

export const initialCanvasState: CanvasState = {};

export type CanvasActions =
	Action<'addMarker'> |
	Action<'removeMarker', number>;

export default function reducer(
	state = initialCanvasState,
	action: CanvasActions
) {
	switch (action.type) {
		case 'addMarker':
			return {
				...state,
			}
		case 'removeMarker':
			return {
				...state,
			}
		default:
			return state;
	}
}