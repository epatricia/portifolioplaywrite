# SauceDemo - Playwright

Projeto base de automação E2E utilizando Playwright + TypeScript e Page Object Model (POM).

## Cenários
- CT01 Login válido
- CT02 Login com senha inválida
- CT03 Login sem preencher campos
- CT04 Adicionar produto ao carrinho
- CT05 Validar produto no carrinho
- CT06 Remover produto do carrinho
- CT07 Checkout sem preencher dados
- CT08 Compra completa

## Instalação
```bash
npm install
npx playwright install chromium
```

## Execução
```bash
npm test
```

Com navegador visível:
```bash
npm run test:headed
```

Interface do Playwright:
```bash
npm run test:ui
```

Relatório HTML:
```bash
npm run report
```
