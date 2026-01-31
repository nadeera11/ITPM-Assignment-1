import { test, expect } from '@playwright/test';

//testcase: Pos_Fun_0001

test('Pos_Fun_0001: Convert a Daily simple present tense sentence', async ({ page }) => {

  await page.goto('https://www.swifttranslator.com/', { waitUntil: 'domcontentloaded' });

  const singlishInput = 'mama kadeata yanavaa';
  const expectedSinhala = 'මම කඩේට යනවා';

  const inputField = page.locator('[placeholder="Input Your Singlish Text Here."]');
  await expect(inputField).toBeVisible();

  await inputField.fill('');
  await inputField.pressSequentially(singlishInput, { delay: 50 });

  const outputField = page.locator('text=Sinhala').locator('..').locator('div').nth(1);

  await expect(outputField).toContainText(expectedSinhala, { timeout: 10000 });

  console.log('Test Pos_Fun_0001 executed successfully');

});

//testcase: Pos_Fun_0002

test('Pos_Fun_0002: Convert compound sentence with future plan', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/', { waitUntil: 'domcontentloaded' });

    const singlishInput = 'api pusthakalayata yanavaa habaeyi ikmanata aapahu enavaa';
    const expectedSinhala = 'අපි පුස්තකලයට යනවා හබැයි ඉක්මනට  ආපහු එනවා';

    const inputField = page.locator('[placeholder="Input Your Singlish Text Here."]');
    await expect(inputField).toBeVisible();

    await inputField.fill('');
    await inputField.pressSequentially(singlishInput, { delay: 50 });

    const outputField = page.locator('text=Sinhala').locator('..').locator('div').nth(1);
    await expect(outputField).toContainText(expectedSinhala, { timeout: 10000 });

    console.log('Test Pos_Fun_0002 executed successfully');
});

//testcase: Pos_Fun_0003

test('Pos_Fun_0003: Convert complex sentence with condition', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/', { waitUntil: 'domcontentloaded' }); 

    const singlishInput = 'vaessa nisaa mata enna parakku unaa';
    const expectedSinhala = 'වැස්ස නිසා මට එන්න පරක්කු උනා';

    const inputField = page.locator('[placeholder="Input Your Singlish Text Here."]');
    await expect(inputField).toBeVisible();
    
    await inputField.fill('');
    await inputField.pressSequentially(singlishInput, { delay: 50 });

    const outputField = page.locator('text=Sinhala').locator('..').locator('div').nth(1);
    await expect(outputField).toContainText(expectedSinhala, { timeout: 10000 });

    console.log('Test Pos_Fun_0003 executed successfully');
});

//testcase: Pos_Fun_0004  
test('Pos_Fun_0004: Polite question about availability', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/', { waitUntil: 'domcontentloaded' });

    const singlishInput = 'karunaakarala, mata thava salli poddak dhenna puluvandha?';
    const expectedSinhala = 'කරුනාකරල, මට තව සල්ලි පොඩ්ඩක් දෙන්න පුලුවන්ද?';

    const inputField = page.locator('[placeholder="Input Your Singlish Text Here."]');
    await expect(inputField).toBeVisible();

    await inputField.fill('');
    await inputField.pressSequentially(singlishInput, { delay: 50 });

    const outputField = page.locator('text=Sinhala').locator('..').locator('div').nth(1);
    await expect(outputField).toContainText(expectedSinhala, { timeout: 10000 });

    console.log('Test Pos_Fun_0004 executed successfully');
});

//testcase: Pos_Fun_0005
test('Pos_Fun_0005: Command with urgency', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/', { waitUntil: 'domcontentloaded' });

    const singlishInput = 'methanin vaadivenna';
    const expectedSinhala = 'මෙතනින් වාඩිවෙන්න';

    const inputField = page.locator('[placeholder="Input Your Singlish Text Here."]');
    await expect(inputField).toBeVisible();

    await inputField.fill('');
    await inputField.pressSequentially(singlishInput, { delay: 50 });

    const outputField = page.locator('text=Sinhala').locator('..').locator('div').nth(1);
    await expect(outputField).toContainText(expectedSinhala, { timeout: 10000 });

    console.log('Test Pos_Fun_0005 executed successfully');
});

//testcase: Pos_Fun_0006
test('Pos_Fun_0006: Positive future intention', async ({ page }) => {  
    await page.goto('https://www.swifttranslator.com/', { waitUntil: 'domcontentloaded' });

    const singlishInput = 'api heta maathara gihin chithrapatiyak balamu';
    const expectedSinhala = 'අපි හෙට මාතර ගිහින් චිත්‍රපටියක් බලමු';

    const inputField = page.locator('[placeholder="Input Your Singlish Text Here."]');
    await expect(inputField).toBeVisible();

    await inputField.fill('');
    await inputField.pressSequentially(singlishInput, { delay: 50 }); 

    const outputField = page.locator('text=Sinhala').locator('..').locator('div').nth(1);
    await expect(outputField).toContainText(expectedSinhala, { timeout: 10000 });

    console.log('Test Pos_Fun_0006 executed successfully');
});

//testcase: Pos_Fun_0007
test('Pos_Fun_0007: Negative polite refusal', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/', { waitUntil: 'domcontentloaded' });

    const singlishInput = 'mata dhaen enna baee, mata vaeda vagayak thiyenava';
    const expectedSinhala = 'මට දැන් එන්න බෑ, මට වැඩ වගයක් තියෙනව';

    const inputField = page.locator('[placeholder="Input Your Singlish Text Here."]');
    await expect(inputField).toBeVisible();

    await inputField.fill('');
    await inputField.pressSequentially(singlishInput, { delay: 50 });

    const outputField = page.locator('text=Sinhala').locator('..').locator('div').nth(1);
    await expect(outputField).toContainText(expectedSinhala, { timeout: 10000 });

    console.log('Test Pos_Fun_0007 executed successfully');
});

//testcase: Pos_Fun_0008
test('Pos_Fun_0008: Very polite request for help', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/', { waitUntil: 'domcontentloaded' });

    const singlishInput = 'oyaata puluvandha mata  WhatsApp group ekea link eka share karanna?';
    const expectedSinhala = 'ඔයාට පුලුවන්ද මට  WhatsApp group එකේ link එක share කරන්න?';

    const inputField = page.locator('[placeholder="Input Your Singlish Text Here."]');
    await expect(inputField).toBeVisible();

    await inputField.fill('');
    await inputField.pressSequentially(singlishInput, { delay: 50 });

    const outputField = page.locator('text=Sinhala').locator('..').locator('div').nth(1);
    await expect(outputField).toContainText(expectedSinhala, { timeout: 10000 });

    console.log('Test Pos_Fun_0008 executed successfully');
});

//testcase: Pos_Fun_0009
test('Pos_Fun_0009: Informal greeting among friends', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/', { waitUntil: 'domcontentloaded' }); 

    const singlishInput = 'machan, kohomadha? kella giyaa dha?';
    const expectedSinhala = 'මචන්, කොහොමද? කෙල්ල ගියා ද?';

    const inputField = page.locator('[placeholder="Input Your Singlish Text Here."]');
    await expect(inputField).toBeVisible();

    await inputField.fill('');
    await inputField.pressSequentially(singlishInput, { delay: 50 });

    const outputField = page.locator('text=Sinhala').locator('..').locator('div').nth(1);
    await expect(outputField).toContainText(expectedSinhala, { timeout: 10000 });

    console.log('Test Pos_Fun_0009 executed successfully');
});

//testcase: Pos_Fun_0010
test('Pos_Fun_0010: Past event narration', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/', { waitUntil: 'domcontentloaded' }); 

    const singlishInput = 'iiyee mama iskoole giyaa,passe panthi gihin gedhara aavaa';
    const expectedSinhala = 'ඊයේ මම ඉස්කෝලෙ ගියා,පස්සෙ පන්ති ගිහින් ගෙදර ආවා';

    const inputField = page.locator('[placeholder="Input Your Singlish Text Here."]');
    await expect(inputField).toBeVisible();

    await inputField.fill('');
    await inputField.pressSequentially(singlishInput, { delay: 50 });

    const outputField = page.locator('text=Sinhala').locator('..').locator('div').nth(1);
    await expect(outputField).toContainText(expectedSinhala, { timeout: 10000 });

    console.log('Test Pos_Fun_0010 executed successfully');
});

//testcase: Pos_Fun_0011
test('Pos_Fun_0011:Future plan with specific date  ', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/', { waitUntil: 'domcontentloaded' });

    const singlishInput = 'api ena nivaaduvata nuvara yamu';
    const expectedSinhala = 'අපි එන නිවාඩුවට නුවර යමු';

    const inputField = page.locator('[placeholder="Input Your Singlish Text Here."]');
    await expect(inputField).toBeVisible();

    await inputField.fill('');
    await inputField.pressSequentially(singlishInput, { delay: 50 });

    const outputField = page.locator('text=Sinhala').locator('..').locator('div').nth(1);
    await expect(outputField).toContainText(expectedSinhala, { timeout: 10000 });

    console.log('Test Pos_Fun_0011 executed successfully');
});

//testcase: Pos_Fun_0012
test('Pos_Fun_0012: Mixed English brand term ', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/', { waitUntil: 'domcontentloaded' });

    const singlishInput = 'ee class eka karanne zoom meetings valin';
    const expectedSinhala = 'ඒ class එක කරන්නේ zoom meetings වලින්';

    const inputField = page.locator('[placeholder="Input Your Singlish Text Here."]');
    await expect(inputField).toBeVisible();

    await inputField.fill('');
    await inputField.pressSequentially(singlishInput, { delay: 50 });

    const outputField = page.locator('text=Sinhala').locator('..').locator('div').nth(1);
    await expect(outputField).toContainText(expectedSinhala, { timeout: 10000 });

    console.log('Test Pos_Fun_0012 executed successfully');
});

//testcase: Pos_Fun_0013
test('Pos_Fun_0013: Long personal anecdote', async ({ page }) => {
    test.setTimeout(60000); // Increase timeout to 60 seconds for long text
    await page.goto('https://www.swifttranslator.com/', { waitUntil: 'domcontentloaded' });

    const singlishInput = 'mama office ekata giyaa. magee boss mata kivvaa project eka karalaa ivara karanna kiyalaa.mama eeka karala ivara karaa.iita passe client ta kivva vadee ivarayi kiyala.client kivva eeka niyameta karala thiyenava kiyala.iita passe mata boss gen bonus ekak hambavunaa.mama gedhara yana gaman eeken aluth phone ekakuth aragena giyaa. mata godak sathutuyi';
    const expectedSinhala = 'මම office එකට ගියා. මගේ boss මට කිව්වා project එක කරලා ඉවර කරන්න කියලා.මම ඒක කරල ඉවර කරා.ඊට පස්සෙ client ට කිව්ව වඩේ ඉවරයි කියල.client කිව්ව ඒක නියමෙට කරල තියෙනව කියල.ඊට පස්සෙ මට boss ගෙන් bonus එකක් හම්බවුනා.මම ගෙදර යන ගමන් ඒකෙන් අලුත් phone එකකුත් අරගෙන ගියා. මට ගොඩක් සතුටුයි';

    const inputField = page.locator('[placeholder="Input Your Singlish Text Here."]');
    await expect(inputField).toBeVisible();

    await inputField.fill('');
    await inputField.pressSequentially(singlishInput, { delay: 50 });

    const outputField = page.locator('text=Sinhala').locator('..').locator('div').nth(1);
    await expect(outputField).toContainText(expectedSinhala, { timeout: 30000 });

    console.log('Test Pos_Fun_0013 executed successfully');
});

//testcase: Pos_Fun_0014  
test('Pos_Fun_0014: Slang expression of frustration', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/', { waitUntil: 'domcontentloaded' });

    const singlishInput = 'ayyoo! ehema karanna epaa machan';
    const expectedSinhala = 'අය්යෝ! එහෙම කරන්න එපා මචන්';

    const inputField = page.locator('[placeholder="Input Your Singlish Text Here."]');
    await expect(inputField).toBeVisible();

    await inputField.fill('');
    await inputField.pressSequentially(singlishInput, { delay: 50 });

    const outputField = page.locator('text=Sinhala').locator('..').locator('div').nth(1);
    await expect(outputField).toContainText(expectedSinhala, { timeout: 10000 });

    console.log('Test Pos_Fun_0014 executed successfully');
});

//testcase: Pos_Fun_0015
test('Pos_Fun_0015: Currency in transaction', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/', { waitUntil: 'domcontentloaded' });
    
    const singlishInput = 'mata oyaagen Rs.3000 oona';
    const expectedSinhala = 'මට ඔයාගෙන් Rs.3000 ඕන';

    const inputField = page.locator('[placeholder="Input Your Singlish Text Here."]');
    await expect(inputField).toBeVisible();

    await inputField.fill('');
    await inputField.pressSequentially(singlishInput, { delay: 50 });

    const outputField = page.locator('text=Sinhala').locator('..').locator('div').nth(1);
    await expect(outputField).toContainText(expectedSinhala, { timeout: 10000 });

    console.log('Test Pos_Fun_0015 executed successfully');
});

//testcase: Pos_Fun_0016
test('Pos_Fun_0016: Time in question', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/', { waitUntil: 'domcontentloaded' });

    const singlishInput = 'meeting eka 10.30AM nedha?';
    const expectedSinhala = 'meeting එක 10.30AM නේද?';

    const inputField = page.locator('[placeholder="Input Your Singlish Text Here."]');
    await expect(inputField).toBeVisible();

    await inputField.fill('');
    await inputField.pressSequentially(singlishInput, { delay: 50 });

    const outputField = page.locator('text=Sinhala').locator('..').locator('div').nth(1);
    await expect(outputField).toContainText(expectedSinhala, { timeout: 10000 });

    console.log('Test Pos_Fun_0016 executed successfully');
});

//testcase: Pos_Fun_0017
test('Pos_Fun_0017: Extra spaces in polite request', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/', { waitUntil: 'domcontentloaded' });
    
    const singlishInput = 'karunaakarala mata ee vaedee karalaa dhenna puluvandha?';
    const expectedSinhala = 'කරුනාකරල මට ඒ වැඩේ කරලා දෙන්න පුලුවන්ද?';

    const inputField = page.locator('[placeholder="Input Your Singlish Text Here."]');
    await expect(inputField).toBeVisible();

    await inputField.fill('');
    await inputField.pressSequentially(singlishInput, { delay: 50 });

    const outputField = page.locator('text=Sinhala').locator('..').locator('div').nth(1);
    await expect(outputField).toContainText(expectedSinhala, { timeout: 10000 });

    console.log('Test Pos_Fun_0017 executed successfully');
});

//testcase: Pos_Fun_0018  
test('Pos_Fun_0018: Two sentences with line break', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/', { waitUntil: 'domcontentloaded' });

    const singlishInput = 'mama gedhara yanavaa.\n oyaa enne naedhdha?';
    const expectedSinhala = 'මම ගෙදර යනවා.\n ඔයා එන්නෙ නැද්ද?';

    const inputField = page.locator('[placeholder="Input Your Singlish Text Here."]');
    await expect(inputField).toBeVisible();

    await inputField.fill('');
    await inputField.pressSequentially(singlishInput, { delay: 50 });

    const outputField = page.locator('text=Sinhala').locator('..').locator('div').nth(1);
    await expect(outputField).toContainText(expectedSinhala, { timeout: 10000 });

    console.log('Test Pos_Fun_0018 executed successfully');
});

//testcase: Pos_Fun_0019
test('Pos_Fun_0019: Long paragraph about results', async ({ page }) => {
    test.setTimeout(60000); // Increase timeout to 60 seconds for long text
    await page.goto('https://www.swifttranslator.com/', { waitUntil: 'domcontentloaded' });
    
    const singlishInput = 'magee puthaage university final exam results aava.eyaa engineering faculty eke first class ekak gaththaa. dhaen eyaa internship ekak karanna hadhanne. puthaa job interview valata yanavaa. eyaa foreign country ekakata yanna thamayi plan karala thiyenne. apith puthaata support karanava. gedhara api hamootama sathutuyi eyaa gaena';
    const expectedSinhala = 'මගේ පුතාගෙ university final exam results ආව.එයා engineering faculty eke first class එකක් ගත්තා. දැන් එයා internship එකක් කරන්න හදන්නෙ. පුතා job interview වලට යනවා. එයා foreign country එකකට යන්න තමයි plan කරල තියෙන්නෙ. අපිත් පුතාට support කරනව. ගෙදර අපි හමෝටම සතුටුයි එයා ගැන';

    const inputField = page.locator('[placeholder="Input Your Singlish Text Here."]');
    await expect(inputField).toBeVisible();

    await inputField.fill('');
    await inputField.pressSequentially(singlishInput, { delay: 50 });

    const outputField = page.locator('text=Sinhala').locator('..').locator('div').nth(1);
    await expect(outputField).toContainText(expectedSinhala, { timeout: 5000 });

    console.log('Test Pos_Fun_0019 executed successfully');
});

//testcase: Pos_Fun_0020
test('Pos_Fun_0020: Repeated words for insistence', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/', { waitUntil: 'domcontentloaded' });

    const singlishInput = 'giyaa giyaa, mama gedhara giyaa';
    const expectedSinhala = 'ගියා ගියා, මම ගෙදර ගියා';

    const inputField = page.locator('[placeholder="Input Your Singlish Text Here."]');
    await expect(inputField).toBeVisible();

    await inputField.fill('');
    await inputField.pressSequentially(singlishInput, { delay: 50 });

    const outputField = page.locator('text=Sinhala').locator('..').locator('div').nth(1);
    await expect(outputField).toContainText(expectedSinhala, { timeout: 10000 });

    console.log('Test Pos_Fun_0020 executed successfully');
});

//testcase: Pos_Fun_0021
test('Pos_Fun_0021: Question to group', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/', { waitUntil: 'domcontentloaded' }); 

    const singlishInput = 'oyaalaa gaalle giyaadha?';
    const expectedSinhala = 'ඔයාලා ගාල්ලෙ ගියාද?';

    const inputField = page.locator('[placeholder="Input Your Singlish Text Here."]');
    await expect(inputField).toBeVisible();

    await inputField.fill('');
    await inputField.pressSequentially(singlishInput, { delay: 50 });

    const outputField = page.locator('text=Sinhala').locator('..').locator('div').nth(1);
    await expect(outputField).toContainText(expectedSinhala, { timeout: 5000 });

    console.log('Test Pos_Fun_0021 executed successfully');
});

//testcase: Pos_Fun_0022
test('Pos_Fun_0022: Abbreviation in request', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/', { waitUntil: 'domcontentloaded' });

    const singlishInput = 'mata oyaage NIC eka evanna puluvandha?';
    const expectedSinhala = 'මට ඔයාගෙ NIC එක එවන්න පුලුවන්ද?';

    const inputField = page.locator('[placeholder="Input Your Singlish Text Here."]');
    await expect(inputField).toBeVisible();

    await inputField.fill('');
    await inputField.pressSequentially(singlishInput, { delay: 50 });

    const outputField = page.locator('text=Sinhala').locator('..').locator('div').nth(1);
    await expect(outputField).toContainText(expectedSinhala, { timeout: 10000 });

    console.log('Test Pos_Fun_0022 executed successfully');
});

//testcase: Pos_Fun_0023
test('Pos_Fun_0023: Polite + informal mix', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/', { waitUntil: 'domcontentloaded' });

    const singlishInput = 'please machan, mata thava help ekak dhenna puluvandha?';
    const expectedSinhala = 'please මචන්, මට තව help එකක් දෙන්න පුලුවන්ද?';

    const inputField = page.locator('[placeholder="Input Your Singlish Text Here."]');
    await expect(inputField).toBeVisible();

    await inputField.fill('');
    await inputField.pressSequentially(singlishInput, { delay: 50 });

    const outputField = page.locator('text=Sinhala').locator('..').locator('div').nth(1);
    await expect(outputField).toContainText(expectedSinhala, { timeout: 5000 });

    console.log('Test Pos_Fun_0023 executed successfully');
});

//testcase: Pos_Fun_0024
test('Pos_Fun_0024: Measurement in cooking instruction', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/', { waitUntil: 'domcontentloaded' });

    const singlishInput = 'kiri 500ml, siini 200g aragena enna';
    const expectedSinhala = 'කිරි 500ml, සීනි 200g අරගෙන එන්න';

    const inputField = page.locator('[placeholder="Input Your Singlish Text Here."]');
    await expect(inputField).toBeVisible();

    await inputField.fill('');
    await inputField.pressSequentially(singlishInput, { delay: 50 });

    const outputField = page.locator('text=Sinhala').locator('..').locator('div').nth(1);
    await expect(outputField).toContainText(expectedSinhala, { timeout: 5000 });

    console.log('Test Pos_Fun_0024 executed successfully');
});

//testcase: Neg_Fun_0001
test('Neg_Fun_0001: Misspelled common verb', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/', { waitUntil: 'domcontentloaded' });

    const singlishInput = 'mama gedhara yanawa';
    const expectedSinhala = 'මම ගෙදර යනවා';

    const inputField = page.locator('[placeholder="Input Your Singlish Text Here."]');
    await expect(inputField).toBeVisible();

    await inputField.fill('');
    await inputField.pressSequentially(singlishInput, { delay: 50 });

    const outputField = page.locator('text=Sinhala').locator('..').locator('div').nth(1);
    await expect(outputField).toContainText(expectedSinhala, { timeout: 5000 });

    console.log('Test Neg_Fun_0001 executed successfully');
});

//testcase: Neg_Fun_0002
test('Neg_Fun_0002: Inconsistent capitalization', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/', { waitUntil: 'domcontentloaded' });

    const singlishInput = 'MaMa GeDhArA YaNaVa';
    const expectedSinhala = 'මම ගෙදර යනවා';
    
    const inputField = page.locator('[placeholder="Input Your Singlish Text Here."]');
    await expect(inputField).toBeVisible();

    await inputField.fill('');
    await inputField.pressSequentially(singlishInput, { delay: 50 });

    const outputField = page.locator('text=Sinhala').locator('..').locator('div').nth(1);
    await expect(outputField).toContainText(expectedSinhala, { timeout: 5000 });

    console.log('Test Neg_Fun_0002 executed successfully');
});

//testcase: Neg_Fun_0003
test('Neg_Fun_0003: No spaces at all', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/', { waitUntil: 'domcontentloaded' });

    const singlishInput = 'mamagedharayanava';
    const expectedSinhala = 'මම ගෙදර යනවා';

    const inputField = page.locator('[placeholder="Input Your Singlish Text Here."]');
    await expect(inputField).toBeVisible();

    await inputField.fill('');
    await inputField.pressSequentially(singlishInput, { delay: 50 });

    const outputField = page.locator('text=Sinhala').locator('..').locator('div').nth(1);
    await expect(outputField).toContainText(expectedSinhala, { timeout: 5000 });

    console.log('Test Neg_Fun_0003 executed successfully');
});

//testcase: Neg_Fun_0004
test('Neg_Fun_0004: Heavy slang/street talk', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/', { waitUntil: 'domcontentloaded' });

    const singlishInput = 'ela kiri, ehema kiyapan mung kiyala?';
    const expectedSinhala = '(Unclear expected output)';

    const inputField = page.locator('[placeholder="Input Your Singlish Text Here."]');
    await expect(inputField).toBeVisible();

    await inputField.fill('');
    await inputField.pressSequentially(singlishInput, { delay: 50 });

    const outputField = page.locator('text=Sinhala').locator('..').locator('div').nth(1);
    await expect(outputField).toContainText(expectedSinhala, { timeout: 5000 });

    console.log('Test Neg_Fun_0004 executed successfully');
});

//testcase: Neg_Fun_0005
test('Neg_Fun_0005: Very long run-on without punctuation', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/', { waitUntil: 'domcontentloaded' });

    const singlishInput = 'mama gedhara yanava mata bath oona mama gedhara yanava mata bath oona mama gedhara yanava mata bath oona mama gedhara yanava mata bath oona mama gedhara yanava mata bath oona mama gedhara yanava mata bath oona mama gedhara yanava mata bath oona mama gedhara yanava mata bath oona mama gedhara yanava mata bath oona mama gedhara yanava mata bath oona mama gedhara yanava mata bath oona mama gedhara yanava mata bath oona';
    const expectedSinhala = '(Should be multiple sentences)';

    const inputField = page.locator('[placeholder="Input Your Singlish Text Here."]');
    await expect(inputField).toBeVisible();

    await inputField.fill('');
    await inputField.pressSequentially(singlishInput, { delay: 50 });

    const outputField = page.locator('text=Sinhala').locator('..').locator('div').nth(1);
    await expect(outputField).toContainText(expectedSinhala, { timeout: 5000 });

    console.log('Test Neg_Fun_0005 executed successfully');
});

//testcase: Neg_Fun_0006
test('Neg_Fun_0006: Mostly English with Sinhala fragment', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/', { waitUntil: 'domcontentloaded' });

    const singlishInput = 'I went to the market and then mama gedhara giya';
    const expectedSinhala = 'මම වෙළඳපොළට ගියා, ඊට පස්සේ මම ගෙදර ගියා';

    const inputField = page.locator('[placeholder="Input Your Singlish Text Here."]');
    await expect(inputField).toBeVisible();

    await inputField.fill('');
    await inputField.pressSequentially(singlishInput, { delay: 50 });

    const outputField = page.locator('text=Sinhala').locator('..').locator('div').nth(1);
    await expect(outputField).toContainText(expectedSinhala, { timeout: 5000 });

    console.log('Test Neg_Fun_0006 executed successfully');
});

//testcase: Neg_Fun_0007
test('Neg_Fun_0007:Invalid date format ', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/', { waitUntil: 'domcontentloaded' });

    const singlishInput = 'api 2025-13-45 yamu';
    const expectedSinhala = '(Should preserve date as is)';

    const inputField = page.locator('[placeholder="Input Your Singlish Text Here."]');
    await expect(inputField).toBeVisible();

    await inputField.fill('');
    await inputField.pressSequentially(singlishInput, { delay: 50 });

    const outputField = page.locator('text=Sinhala').locator('..').locator('div').nth(1);
    await expect(outputField).toContainText(expectedSinhala, { timeout: 5000 });

    console.log('Test Neg_Fun_0007 executed successfully');
});

//testcase: Neg_Fun_0008
test('Neg_Fun_0008: Special chars inside words', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/', { waitUntil: 'domcontentloaded' });

    const singlishInput = 'ma$ma gedhara yanava';
    const expectedSinhala = 'මම ගෙදර යනවා';

    const inputField = page.locator('[placeholder="Input Your Singlish Text Here."]');
    await expect(inputField).toBeVisible();

    await inputField.fill('');
    await inputField.pressSequentially(singlishInput, { delay: 50 });

    const outputField = page.locator('text=Sinhala').locator('..').locator('div').nth(1);
    await expect(outputField).toContainText(expectedSinhala, { timeout: 5000 });

    console.log('Test Neg_Fun_0008 executed successfully');
});

//testcase: Neg_Fun_0009
test('Neg_Fun_0009: Cleared input scenario', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/', { waitUntil: 'domcontentloaded' });

    const singlishInput = '';
    const expectedSinhala = '';

    const inputField = page.locator('[placeholder="Input Your Singlish Text Here."]');
    await expect(inputField).toBeVisible();

    await inputField.fill('');
    await inputField.pressSequentially(singlishInput, { delay: 50 });

    const outputField = page.locator('text=Sinhala').locator('..').locator('div').nth(1);
    await expect(outputField).toContainText(expectedSinhala, { timeout: 5000 });

    console.log('Test Neg_Fun_0009 executed successfully');
});

//testcase: Neg_Fun_0010
test('Neg_Fun_0010: Only numbers and symbols', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/', { waitUntil: 'domcontentloaded' });

    const singlishInput = '123@456#789';
    const expectedSinhala = '(Should remain as numbers/symbols)';

    const inputField = page.locator('[placeholder="Input Your Singlish Text Here."]');
    await expect(inputField).toBeVisible();

    await inputField.fill('');
    await inputField.pressSequentially(singlishInput, { delay: 50 });

    const outputField = page.locator('text=Sinhala').locator('..').locator('div').nth(1);
    await expect(outputField).toContainText(expectedSinhala, { timeout: 5000 });

    console.log('Test Neg_Fun_0010 executed successfully');
});

//testcase: Pos_UI_0010

test('Pos_UI_0009: Sinhala output updates automatically in real-time', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/', { waitUntil: 'domcontentloaded' });

  const singlishInput = 'mama gedhara yanavaa';
  const expectedSinhalaFull = 'මම ගෙදර යනවා';

  const inputField = page.locator('[placeholder="Input Your Singlish Text Here."]');
  await expect(inputField).toBeVisible();

  const outputField = page.locator('text=Sinhala').locator('..').locator('div').nth(1);

  await inputField.fill('');

  await inputField.pressSequentially('mama gedhara', { delay: 80 });
  await expect(outputField).not.toHaveText('', { timeout: 10000 });

  const partialOutput = (await outputField.textContent())?.trim() ?? '';

  await inputField.pressSequentially(' yanavaa', { delay: 80 });
  await expect(outputField).toContainText(expectedSinhalaFull, { timeout: 10000 });

  const finalOutput = (await outputField.textContent())?.trim() ?? '';
  expect(finalOutput).not.toBe(partialOutput);
});