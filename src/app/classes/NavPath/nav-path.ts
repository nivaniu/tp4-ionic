import {Router} from '@angular/router';
import {toTitleCase} from 'codelyzer/util/utils';

export class NavPath {
    private path = '';
    private args: string[];

    constructor(args: string[]) {
        if (args != null) {
            this.args = args.filter((value => value != null && value.length !== 0));
        } else {
            this.args = [];
        }
    }

    public addToPath(arg: string) {
        if (arg == null || arg.length === 0) {
            return;
        }
        this.args[this.args.length] = arg;
    }

    public getLastPageName() {
        if (this.args.length === 0) {
            return '/';
        }
        return toTitleCase(this.args[this.args.length - 1].replace('_', ' '));
    }

    public getRawLastPageName = (): string => {
        if (this.args.length === 0) {
            return '/';
        }
        return this.args[this.args.length - 1];
    };

    public compile = (): string => {
        for (const arg of this.args) {
            this.path += '/' + arg;
        }
        return this.path;
    };
}
