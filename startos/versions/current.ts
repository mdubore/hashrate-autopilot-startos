import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk';

export const current = VersionInfo.of({
  version: '1.18.2:0',
  releaseNotes: {
    en_US: `Updates Hashrate Autopilot to upstream 1.18.2.

- Protects and automatically restores unpaid-earnings history that older releases could erase after a genuine balance exceeded 1.5 million sats.
- Shows the marketplace's reason for failed create, edit, and cancel actions and adds account-protection holds for repeated non-delivering bids, active marketplace blacklists, and a Bitcoin node that stays unreachable for 30 minutes. Node-down protection cancels active bids before holding new ones.
- Marks hold and failure periods truthfully on charts and the Timeline, and no longer labels estimated alert endings as recoveries.

The upstream application runs migration 0124 automatically. There are no new settings. Upstream is now in maintenance mode, so read its project notice before relying on future feature work.

[v1.18.1 recovery notes](https://github.com/rdouma/hashrate-autopilot/releases/tag/v1.18.1) · [v1.18.2 release notes](https://github.com/rdouma/hashrate-autopilot/releases/tag/v1.18.2)`,
    es_ES: `Actualiza Hashrate Autopilot a la versión upstream 1.18.2.

- Protege y restaura automáticamente el historial de ganancias pendientes que las versiones anteriores podían borrar cuando un saldo real superaba 1,5 millones de sats.
- Muestra el motivo del marketplace para las acciones fallidas de crear, editar y cancelar, y añade pausas de protección de la cuenta ante pujas repetidas que no entregan hashrate, listas negras activas del marketplace y un nodo de Bitcoin que permanece inaccesible durante 30 minutos. La protección por caída del nodo cancela las pujas activas antes de bloquear nuevas pujas.
- Marca con claridad los periodos de pausa y fallo en los gráficos y en la cronología, y deja de presentar como recuperaciones los finales estimados de las alertas.

La aplicación upstream ejecuta automáticamente la migración 0124. No hay ajustes nuevos. El proyecto upstream está ahora en modo de mantenimiento; lee su aviso antes de depender de futuras funciones.

[Notas de recuperación de v1.18.1](https://github.com/rdouma/hashrate-autopilot/releases/tag/v1.18.1) · [Notas de la versión v1.18.2](https://github.com/rdouma/hashrate-autopilot/releases/tag/v1.18.2)`,
    de_DE: `Aktualisiert Hashrate Autopilot auf Upstream 1.18.2.

- Schützt und rekonstruiert automatisch den Verlauf ausstehender Erträge, den ältere Versionen löschen konnten, wenn ein echter Saldo 1,5 Millionen Sats überstieg.
- Zeigt den Grund des Marktplatzes für fehlgeschlagene Erstell-, Bearbeitungs- und Abbruchaktionen und fügt Kontoschutz-Sperren für wiederholte Gebote ohne Hashrate-Lieferung, aktive Marktplatz-Blacklists und einen 30 Minuten lang nicht erreichbaren Bitcoin-Knoten hinzu. Der Knotenausfallschutz bricht aktive Gebote ab, bevor neue Gebote gesperrt werden.
- Kennzeichnet Sperr- und Fehlerzeiträume in Diagrammen und Timeline wahrheitsgemäß und bezeichnet geschätzte Alert-Enden nicht mehr als Wiederherstellungen.

Die Upstream-Anwendung führt Migration 0124 automatisch aus. Es gibt keine neuen Einstellungen. Das Upstream-Projekt befindet sich jetzt im Wartungsmodus; lesen Sie den Projekthinweis, bevor Sie auf zukünftige Funktionen bauen.

[Wiederherstellungshinweise zu v1.18.1](https://github.com/rdouma/hashrate-autopilot/releases/tag/v1.18.1) · [Versionshinweise zu v1.18.2](https://github.com/rdouma/hashrate-autopilot/releases/tag/v1.18.2)`,
    pl_PL: `Aktualizuje Hashrate Autopilot do wersji upstream 1.18.2.

- Chroni i automatycznie odtwarza historię niewypłaconych zarobków, którą starsze wersje mogły usunąć, gdy rzeczywiste saldo przekroczyło 1,5 miliona satów.
- Pokazuje powód odrzucenia przez marketplace nieudanych operacji tworzenia, edycji i anulowania oraz dodaje blokady chroniące konto przy powtarzających się ofertach bez dostarczania hashrate'u, aktywnej czarnej liście marketplace i niedostępnym przez 30 minut węźle Bitcoin. Ochrona przy awarii węzła anuluje aktywne oferty przed wstrzymaniem nowych.
- Rzetelnie oznacza okresy blokad i błędów na wykresach i osi czasu oraz nie opisuje już szacowanych zakończeń alertów jako odzyskania sprawności.

Aplikacja upstream automatycznie uruchamia migrację 0124. Nie ma nowych ustawień. Projekt upstream jest teraz w trybie utrzymania; przed planowaniem przyszłych funkcji przeczytaj jego komunikat.

[Informacje o odzyskiwaniu w v1.18.1](https://github.com/rdouma/hashrate-autopilot/releases/tag/v1.18.1) · [Informacje o wydaniu v1.18.2](https://github.com/rdouma/hashrate-autopilot/releases/tag/v1.18.2)`,
    fr_FR: `Met Hashrate Autopilot à jour vers la version upstream 1.18.2.

- Protège et restaure automatiquement l'historique des gains impayés que les anciennes versions pouvaient effacer lorsqu'un solde réel dépassait 1,5 million de sats.
- Affiche la raison donnée par la place de marché pour les actions de création, de modification et d'annulation qui échouent, et ajoute des blocages de protection du compte en cas d'enchères répétées sans livraison de hashrate, de liste noire active de la place de marché ou de nœud Bitcoin inaccessible pendant 30 minutes. La protection contre la panne du nœud annule les enchères actives avant de bloquer les nouvelles.
- Signale fidèlement les périodes de blocage et d'échec dans les graphiques et la chronologie, et ne présente plus les fins estimées d'alertes comme des rétablissements.

L'application upstream exécute automatiquement la migration 0124. Il n'y a aucun nouveau réglage. Le projet upstream est désormais en mode maintenance ; lisez son avis avant de compter sur de futures fonctionnalités.

[Notes de récupération v1.18.1](https://github.com/rdouma/hashrate-autopilot/releases/tag/v1.18.1) · [Notes de version v1.18.2](https://github.com/rdouma/hashrate-autopilot/releases/tag/v1.18.2)`,
  },
  migrations: {
    up: async () => {},
    down: IMPOSSIBLE,
  },
});
