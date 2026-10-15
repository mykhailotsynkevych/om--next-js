# OM: задание по изучению tracking

Источник: сообщение OM, предоставленное пользователем в виде скриншота.
Ниже — расшифровка видимого немецкого текста и русский перевод.
Переносы строк адаптированы для Markdown; формулировки оригинала сохранены.
Дата сообщения на скриншоте не указана.

## Оригинал (Deutsch)

ich würde gerne das Thema **Tracking-Implementierung über den GTM** künftig stärker bei dir verankern. Wäre super, wenn du dich dazu einmal etwas tiefer einlesen könntest, damit wir hier gemeinsam ein sauberes und möglichst einheitliches Setup für unsere Projekte etablieren.

Für den Anfang würde ich den Fokus auf **Google Ads und GA4** legen. Wichtig wären vor allem:

- Google Tag Manager und ein sauberer **Data Layer**
- GA4 Events & Conversions
- Google Ads Conversion Tracking inkl. **Enhanced Conversions**
- **Consent Mode v2** und das Zusammenspiel mit Cookiebot bzw. Usercentrics
- Basic vs. Advanced Consent Mode
- grundsätzliches Verständnis für **DSGVO** und **Consent** beim Tracking
- Testing über GTM Preview/Tag Assistant, DevTools und Network Requests

Ein wichtiger Punkt ist auch **PageSpeed**: Das Tracking sollte möglichst wenig Einfluss auf die Performance haben. Also darauf achten, wann und wie Skripte geladen werden, unnötige/doppelte Tags vermeiden und Drittanbieter sauber über den GTM steuern.

Wenn die Google-Basis sitzt, können wir das anschließend noch auf **Meta, Microsoft Ads, TikTok und ChatGPT Ads** erweitern.

Am besten hauptsächlich mit den **aktuellen offiziellen Dokumentationen** von Google, Cookiebot/Usercentrics und den jeweiligen Plattformen arbeiten, weil sich bei Tracking und Consent immer wieder Dinge ändern.

Das Ziel wäre, dass wir daraus nach und nach ein **sauberes Standard-Setup** entwickeln, das wir bei neuen Projekten als Grundlage verwenden können. Im Endeffekt gibt es nur zwei Setups; 1. Ecommerce Shops mit Warenkörben und Käufen wie bei Salm bspw. oder BBT 2. Lead Generierung über Formulare wie bei AIRJET und ggf. noch eine Mischung aus beidem.

Wenn du dich eingelesen hast, können wir uns gerne einmal zusammensetzen und das gemeinsam durchgehen. Ich schalte dich dann bei allen Kunden im GTM frei, damit du die aktuellen Setups prüfen kannst, ob sie so passen. Ich denke es ist bei einem DEV besser aufgehoben als bei mir.

## Перевод (Русский)

Я хотел бы, чтобы в дальнейшем тема **внедрения отслеживания через GTM** в большей степени была закреплена за тобой. Было бы здорово, если бы ты подробнее изучил эту тему, чтобы мы вместе выстроили аккуратную и по возможности единообразную настройку для наших проектов.

Для начала я бы сосредоточился на **Google Ads и GA4**. Особенно важны:

- Google Tag Manager и правильно организованный **Data Layer**.
- События и конверсии GA4.
- Отслеживание конверсий Google Ads, включая **Enhanced Conversions** (расширенное отслеживание конверсий).
- **Consent Mode v2** и его взаимодействие с Cookiebot или Usercentrics.
- Различия между Basic и Advanced Consent Mode.
- Базовое понимание **DSGVO** (GDPR, Общего регламента ЕС по защите данных) и **согласия пользователей** при отслеживании.
- Проверка через GTM Preview/Tag Assistant, DevTools и сетевые запросы.

Ещё один важный момент — **PageSpeed**: отслеживание должно как можно меньше влиять на производительность. Поэтому нужно следить за тем, когда и как загружаются скрипты, избегать ненужных или дублирующихся тегов и правильно управлять сторонними сервисами через GTM.

Когда основа работы с Google будет освоена, мы сможем расширить настройку на **Meta, Microsoft Ads, TikTok и ChatGPT Ads**.

Лучше работать преимущественно с **актуальной официальной документацией** Google, Cookiebot/Usercentrics и соответствующих платформ, поскольку в отслеживании и управлении согласием постоянно происходят изменения.

Цель — постепенно разработать **аккуратную стандартную настройку**, которую можно будет использовать как основу для новых проектов. По сути, есть только два варианта: 1. Интернет-магазины с корзинами и покупками, например Salm или BBT. 2. Генерация лидов через формы, как у AIRJET. При необходимости возможна и комбинация обоих вариантов.

Когда ты изучишь тему, мы можем встретиться и вместе всё обсудить. После этого я предоставлю тебе доступ к GTM всех клиентов, чтобы ты мог проверить, правильно ли настроены текущие конфигурации. Думаю, разработчику эта задача подходит больше, чем мне.

## Дополнительные материалы от OM

OM также передал две ссылки. Пользователь ознакомился с ними и отметил
их полезность. Материалы прочитаны при добавлении в проект 15 октября 2026 года.
Это дополнительные источники, а не часть немецкого сообщения выше.

1. [AuditSocials — Google Ads Consent Mode v2: Privacy Compliance for EU Advertisers, 2026 Implementation Guide, Conversion Modeling & GDPR](https://www.auditsocials.com/blog/google-ads-consent-mode-v2-privacy-compliance-eu-advertisers-2026-implementation-guide-conversion-modeling-gdpr).
   Темы: настройка CMP и GTM, четыре consent-сигнала, Basic и Advanced,
   моделирование конверсий, Enhanced Conversions и проверка согласия.
2. [Digital Applied — Consent Mode v2 Implementation 2026: SEO & Tracking Guide](https://www.digitalapplied.com/blog/consent-mode-v2-implementation-2026-seo-tracking-guide).
   Темы: связь баннера с consent-сигналами, порядок default/update,
   диагностика ошибок, ограничения моделирования и передача согласия в server-side GTM.

### Выводы для обучения и дальнейшей работы

- Наличие cookie-баннера само по себе не доказывает правильную передачу согласия.
  Проверять нужно всю цепочку CMP → consent state → поведение тегов → реальные запросы.
- Проверять все четыре основных сигнала: `ad_storage`, `analytics_storage`,
  `ad_user_data` и `ad_personalization`, порядок default/update и отсутствие
  измерительных запросов до согласия в выбранном Basic setup.
- Проверять отказ, частичное согласие, принятие, восстановление выбора после
  перезагрузки и отзыв согласия. Использовать GTM Preview/Tag Assistant вместе
  с DevTools, проверкой cookies и Network Requests, а не только статусом тега.
- Различать Google Ads conversion modeling и GA4 behavioral modeling.
  Моделирование и заявленные в статьях проценты восстановления данных не являются
  гарантией результата для небольшого учебного проекта.
- Enhanced Conversions и server-side tagging не отменяют требований к согласию.
  Consent Mode сам по себе не подтверждает соответствие GDPR.

### Ограничения этих источников

Это сторонние статьи, не официальные инструкции Google и не юридическое
заключение. Их примеры кода, численные пороги, региональные настройки и
утверждения о compliance нужно проверять перед применением.

В частности, рекомендация Digital Applied выбирать Advanced не меняет текущий
Basic setup лаборатории: переход требует отдельного решения и оценки требований
к обработке данных. Отсутствие cookies не означает автоматически отсутствие
персональных данных или допустимость передачи без согласия.

По [официальному описанию Google](https://developers.google.com/tag-platform/security/concepts/consent-mode),
Basic допускает общее моделирование конверсий в Ads, а Advanced позволяет
использовать модель, специфичную для рекламодателя. Формулировки статей об
отсутствии любого моделирования в Basic не следует принимать буквально.

Для реализации через GTM
[официальное руководство Google](https://developers.google.com/tag-platform/security/guides/consent)
указывает consent API шаблонов (`setDefaultConsentState` и `updateConsentState`).
Не переносить пример `gtag()` в Custom HTML из статьи без проверки рекомендованного
способа интеграции конкретной CMP.

## Как использовать этот документ

Это исходное задание OM и контекст для обучения в этом проекте, а не
подтверждение того, что перечисленные интеграции уже реализованы.
Текущее состояние лаборатории и инструкции по проверке описаны в
[README](../README.md).

Немецкий оригинал является первичным источником; русский текст — перевод
для удобства. Названия платформ, включая ChatGPT Ads, сохранены из сообщения:
само упоминание не подтверждает доступность продукта или интеграции.
Перед реализацией нужно проверять актуальную официальную документацию,
доступность функций и требования к согласию.
