-- Normalize existing restricted leads before enforcing the invariant.
UPDATE "Lead"
SET "status" = 'DO_NOT_CONTACT'
WHERE "doNotContact" = true
  AND "status" <> 'DO_NOT_CONTACT';

UPDATE "Lead"
SET "doNotContact" = true
WHERE "status" = 'DO_NOT_CONTACT'
  AND "doNotContact" = false;

-- A DO_NOT_CONTACT status and the explicit safety flag must always agree.
ALTER TABLE "Lead"
ADD CONSTRAINT "Lead_do_not_contact_consistency_check"
CHECK (
  ("doNotContact" = true AND "status" = 'DO_NOT_CONTACT')
  OR
  ("doNotContact" = false AND "status" <> 'DO_NOT_CONTACT')
);
