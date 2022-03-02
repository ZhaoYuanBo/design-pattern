"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HouseBuildDirector = void 0;
class HouseBuildDirector {
    setBuilder(builder) {
        this.builder = builder;
    }
    buildHouse() {
        return this.builder.build();
    }
}
exports.HouseBuildDirector = HouseBuildDirector;
//# sourceMappingURL=HouseBuildDirector.js.map