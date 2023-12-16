if (!window.setInter) {
    window.setInter = setTimeout(() => {

        var EASY_CHOICES_PAGE_1 = [
            [5, 3],
            [18, 3],
            [31, 4],
            [47, 2],
            [128, 4],
            [144, 4],
            [160, 3],
            [173, 3],
            [197, 2],
            [218, 2],
            [228, 2],
        ];

        var MATRIX_CHOICES = [
            53,
            76,
            93,
            110,
            182,
            203,
        ];

        function randomInArray(arr) {
            return arr[Math.floor(Math.random() * arr.length)];
        }

        function getRandomUniqueListFromNodeList(nodeList) {
            if (!nodeList || [...nodeList].length === 0) return [];

            let inputArray = [...nodeList];
            const newList = [];
            const size = Math.floor(Math.random() * inputArray.length) + 1;

            while (newList.length < size) {
                const randomIndex = Math.floor(Math.random() * inputArray.length);
                newList.push(inputArray[randomIndex]);
                inputArray = [...inputArray.filter(e => e !== inputArray[randomIndex])];
            }

            return newList;
        }

        EASY_CHOICES_PAGE_1.forEach(([start, count]) => {
            if (start === 5) {
                document.querySelector(`#i5`)?.click();
            } else if (start === 18) {
                document.querySelector(`#i24`)?.click();
            } else if (start === 47) {
                document.querySelector(`#i47`)?.click();
            } else if (start === 160) {
                document.querySelector(`#i160`)?.click();
            } else if (start === 173) {
                document.querySelector(`#i173`)?.click();
            } else {
                const choices = Array.from({length: count}, (_, i) => start + i * 3);
                document.querySelector(`#i${randomInArray(choices)}`)?.click();
            }
        });

        MATRIX_CHOICES.forEach((tableId) => {
            const rows = document.querySelectorAll(`div[aria-labelledby="i${tableId}"]  > div:nth-child(n)`);
            for (const row of getRandomUniqueListFromNodeList(rows)) {
                row.querySelector("div[role='checkbox'],div[role='radio']")?.click()
            }

        });

        setTimeout(() => {
            // Page 1
            document.querySelector('#mG61Hd > div.RH5hzf.RLS9Fe > div > div.ThHDze > div > div.lRwqcd > div')?.click();
            document.querySelector(`body > div.Uc2NEf > div:nth-child(2) > div.RH5hzf.RLS9Fe > div > div.c2gzEf > a`)?.click();
        }, 1000);
    }, 1000);
}