if (!window.setInter) {
    window.setInter = setTimeout(() => {

        var EASY_CHOICES = [
            [5, 3],
            [18, 3],
            [31, 4],
            [47, 2],
            [125, 2]
        ];

        var MATRIX_CHOICES = [
            53,
            76,
            93,
            104,
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

        EASY_CHOICES.forEach(([start, count]) => {
            const choices = Array.from({length: count}, (_, i) => start + i * 3);
            document.querySelector(`#i${randomInArray(choices)}`)?.click();
        });

        MATRIX_CHOICES.forEach((tableId) => {
            const rows = document.querySelectorAll(`div[aria-labelledby="i${tableId}"]  > div:nth-child(n)`);
            // rows.forEach((row) => {
            //     let cells = row.querySelectorAll('div[role="radio"]');
            //     if (cells.length === 0)
            //         cells = row.querySelectorAll('div[role="checkbox"]');
            //     getRandomUniqueListFromNodeList(cells)?.forEach((item) => {
            //         item?.click()
            //     });
            // });
            for (const row of getRandomUniqueListFromNodeList(rows)) {
                row.querySelector("div[role='checkbox'],div[role='radio']")?.click()
            }
        });

        setTimeout(() => {
            document.querySelector('#mG61Hd > div.RH5hzf.RLS9Fe > div > div.ThHDze > div > div.lRwqcd > div')?.click();
            document.querySelector(`body > div.Uc2NEf > div:nth-child(2) > div.RH5hzf.RLS9Fe > div > div.c2gzEf > a`)?.click();
        }, 1000);
    }, 1000);
}