const formatVolumeIconPath = require("../assets/scripts/main");

describe('FormattingVolumeIconPath', () => {
    test('Check to see if the volume icon is 0', () => {
        expect(formatVolumeIconPath(0)).toBe(`./assets/media/icons/volume-level-0.svg`);
    });
    test('Check to see if volume icon is 1', () => {
        expect(formatVolumeIconPath(1)).toBe(`./assets/media/icons/volume-level-1.svg`);
    });
    test('Check to see if the volume icon is 2', () => {
        expect(formatVolumeIconPath(34)).toBe(`./assets/media/icons/volume-level-2.svg`);
    });
    test('Check to see if the volume icon is 3', () => {
        expect(formatVolumeIconPath(67)).toBe(`./assets/media/icons/volume-level-3.svg`);
    });
});

