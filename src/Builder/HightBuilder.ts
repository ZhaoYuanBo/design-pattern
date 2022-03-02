import { Builder } from "./Builder";


export class HighBuilder extends Builder {
    buildBaise(): number {
        const depth = 50;
        console.log(`摩天高楼地基深度为 ${depth} 米`);
        return depth;
    }

    buildWall(): number {
        const height = 500;
        console.log(`摩天大楼墙体高度为 ${height} 米`);
        return height;
    }

    printColor(): string {
        const color = '银色';
        console.log(`摩天大楼的墙体颜色为 ${color}`);
        return color;
    }
}